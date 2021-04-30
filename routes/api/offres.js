const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const validateOffresInput = require("../../validation/offres");
const offres = require("../../models/offres");
const User = require("../../models/User");
router.get("/demo", (req, res) =>
    res.json({
        msg: "Offres Works"
    })
);
router.get(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const errors = {};
        offres.findOne({
            user: req.user.id
        })
            .populate("user", ["name"])
            .then(offre => {
                if (!offre) {
                    errors.nooffre = "no offre exists for this company";
                    return res.status(404).json(errors);
                }
                res.json(offre);
            })
            .catch(err => res.status(404).json(err));
    }
);
router.get("/all", (req, res) => {
    offres.find()
        .populate("user", ["name"])
        .then(offres => {
            if (!offres) {
                errors.nooffre = "no offres";
                return res.status(404).json(errors);
            }
            res.json(offres);
        })
        .catch(err =>
            res.status(404).json({
                offre: "no offres"
            })
        );
});
router.get("/jobTitle/:jobTitle", (req, res) => {
    const errors = {};

    offres.findOne({
        jobTitle: req.params.jobTitle
    })
        .populate("user", ["name"])
        .then(offre => {
            if (!offre) {
                errors.nooffre = "There is no offre for this user";
                res.status(404).json(errors);
            }

            res.json(offres);
        })
        .catch(err => res.status(404).json(err));
});
router.get("/users/:users_id", (req, res) => {
    offres.findOne({
        user: req.params.user_id
    })
        .populate("user", ["name"])
        .then(offre => {
            if (!offre) {
                errors.nooffre = "there is no offre";
                res.status(400).json(errors);
            }
            res.json(offre);
        })
        .catch(err => res.status(404).json(err));
});
router.post(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const { errors, isValid } = validateOffreInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        const fields = {};
        fields.user = req.user.id;

        if (req.body.jobTitle) fields.jobTitle = req.body.jobTitle;
        if (req.body.company) fields.company = req.body.company;
        if (req.body.location) fields.location = req.body.location;

        if (typeof req.body.skills !== "undefined")
            fields.skills = req.body.skills.split(",");


        offres.findOne({
            user: req.user.id
        }).then(offre => {
            if (offre) {
                offre.findOneAndUpdate(
                    {
                        user: req.user.id
                    },
                    {
                        $set: fields
                    },
                    {
                        new: true
                    }
                ).then(offre => res.json(offre));
            } else {
                offres.findOne({
                    jobTitle: fields.jobTitle
                }).then(offre => {
                    if (offre) {
                        errors.jobTitle = "jobTitlealready there";
                        res.status(400).json(errors);
                    }
                    new offres(fields)
                        .save()
                        .then(offre => res.json(offre));
                });
            }
        });
    }
);



module.exports = router;
