import express from "express";
const router = express.Router();
import Tourist from "./touristModel";
import CircularJSON from 'circular-json';


router
  .route("/")
  .get((req, res) => {
    Tourist.find({}, (err, tourists) => {
      if (err) res.send(err);
      res.json(tourists);
    });
    console.log("alo");
  })
  .post((req, res) => {
    let tourist = new Tourist(req.body);
    tourist.save();
    res.status(201).send(tourist);
  });

  router
  .route('/2')
  .get((req, res) => {
    const data= []
    Tourist.distinct("accommodation", (err, accommodations) => {
          if (err) res.send(err);
          res.json(accommodations);
        });
    
  })
  
  router
  .route('/accommodation/:accommodation')
  .get((req, res) => {
    
    Tourist.find({accommodation: req.params.accommodation}, (err, accommodations) => {
          if (err) res.send(err);
          const data = {
            accommodationInfo: accommodations,
            length: accommodations.length
          }
          res.json(data);
        });
  })


router.use("/:touristId", (req, res, next) => {
  Tourist.findById(req.params.touristId, (err, tourist) => {
    if (err) res.status(500).send(err);
    else {
      req.tourist = tourist;
      next();
    }
  });
});

router
  .route("/:touristId")
  .get((req, res) => {
    res.json(req.tourist);
  })
  .put((req, res) => {
    req.tourist.name = req.body.name;
    req.tourist.surname = req.body.surname;
    req.tourist.checkindate = req.body.checkindate;
    req.tourist.checkoutdate = req.body.checkoutdate;
    req.tourist.doctype = req.body.doctype;
    req.tourist.docnum = req.body.docnum;
    req.tourist.accommodation = req.body.accommodation;
    req.tourist.checkedin=req.body.checkedin

    req.tourist.save();
    res.json(req.tourist);
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let b in req.body) {
      tourist[b] = req.body[b];
    }
    tourist.save();
    res.json(req.tourist);
  })
  .delete((req, res) => {
    req.tourist.remove(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("removed");
      }
    });
  });

// router.route("/acc").get((req, res) => {
//   
// });

export default router;
