import { Router } from "express";
const router = Router();

router.get('/', async (req, res) => {
    // console.log(req.query.results);
    if(req.query.results){
        console.log('results', req.query.results);
        if(isNaN(req.query.results)){
            res.status(400).json({ error: 'Invalid query parameter' });
        }
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${req.query.results}`);
            const data = await response.json();
            const { results } = data; 
            const dataShow = results.map(user => {
                return {
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    phone: user.phone,
                    gender: user.gender,
                    picture: user.picture.large
                }
            });
            res.json(dataShow);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching users' });
        }
    } else {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const { results } = data; 
            const dataShow = results.map(user => {
                return {
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    phone: user.phone,
                    gender: user.gender,
                    picture: user.picture.large
                }
            });
            res.json(dataShow);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching users' });
        }
    }
    
});


export default router;
