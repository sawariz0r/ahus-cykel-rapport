import { Router, Request, Response } from "express";

const router: Router = Router();

interface Cykel {
  name: string,
  ramnummer: string
  color: string,
  stolenAt: any, // Ska vara koordinater
  lastSeen: any, // Ska vara koordinater senare,
  city: string,
  description: string
};

const bikes: Cykel[] = [{ name: "Testcykel", ramnummer: "133769420", color: "svart", stolenAt: "1.1, 1.034", lastSeen: "1.2, 1.443", city: "Åhus", description: "Saknar framskärm"}];

router.get("/cyklar", (req: Request, res: Response) => {
  res.send(bikes);
});

router.post("/cyklar", (req: Request, res: Response) => {
  console.log(req.body);

  res.send(bikes);
})




export const cyklar: Router = router;