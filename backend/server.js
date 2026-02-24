const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/img', express.static('public/img'));


const produits = [
    // --- THÈME : ARMERIE (Armes de corps à corps) ---
    { id: 1, theme: "Armerie", nom: "Épée longue en Acier Pliage", prix: 150, url: "http://localhost:3000/img/armes/epee.png" },
    { id: 2, theme: "Armerie", nom: "Hache de guerre Nain", prix: 320, url: "http://localhost:3000/img/armes/hache.png" },
    { id: 3, theme: "Armerie", nom: "Dague de l'Ombre", prix: 450, url: "http://localhost:3000/img/armes/dague.png" },
    { id: 4, theme: "Armerie", nom: "Masse d'armes de Clerc", prix: 180, url: "http://localhost:3000/img/armes/masse.png" },
    { id: 5, theme: "Armerie", nom: "Cimeterre de Nomade", prix: 210, url: "http://localhost:3000/img/armes/cimeterre.png" },
    { id: 6, theme: "Armerie", nom: "Espadon à deux mains", prix: 550, url: "http://localhost:3000/img/armes/espadon.png" },
    { id: 7, theme: "Armerie", nom: "Lance de Cavalier", prix: 120, url: "http://localhost:3000/img/armes/lance.png" },
    { id: 8, theme: "Armerie", nom: "Fléau d'armes", prix: 280, url: "http://localhost:3000/img/armes/fleau.png" },
    { id: 9, theme: "Armerie", nom: "Rapière de Duel", prix: 380, url: "http://localhost:3000/img/armes/rapiere.png" },
    { id: 10, theme: "Armerie", nom: "Marteau de guerre lourd", prix: 420, url: "http://localhost:3000/img/armes/marteau.png" },

    // --- THÈME : ACADÉMIE DE MAGIE (Sorts et Bâtons) ---
    { id: 11, theme: "Magie", nom: "Parchemin de Boule de Feu", prix: 75, url: "http://localhost:3000/img/magies/parchemin.png" },
    { id: 12, theme: "Magie", nom: "Bâton d'Archimage en If", prix: 1200, url: "http://localhost:3000/img/magies/baton.png" },
    { id: 13, theme: "Magie", nom: "Grimoire des Sorts Anciens", prix: 850, url: "http://localhost:3000/img/magies/grimoire.png" },
    { id: 14, theme: "Magie", nom: "Cristal de Mana Pur", prix: 300, url: "http://localhost:3000/img/magies/cristal.png" },
    { id: 15, theme: "Magie", nom: "Sphère de Divination", prix: 450, url: "http://localhost:3000/img/magies/sphere.png" },
    { id: 16, theme: "Magie", nom: "Baguette de Foudre", prix: 550, url: "http://localhost:3000/img/magies/baguette.png" },
    { id: 17, theme: "Magie", nom: "Robe de Sorcier Étoilée", prix: 200, url: "http://localhost:3000/img/magies/robe.png" },
    { id: 18, theme: "Magie", nom: "Amulette de Protection", prix: 150, url: "http://localhost:3000/img/magies/amulette.png" },
    { id: 19, theme: "Magie", nom: "Anneau d'Invisibilité", prix: 2500, url: "http://localhost:3000/img/magies/anneau.png" },
    { id: 20, theme: "Magie", nom: "Cape de Téléportation", prix: 980, url: "http://localhost:3000/img/magies/cape.png" },

    // --- THÈME : FORGE ROYALE (Armures et Boucliers) ---
    { id: 21, theme: "Armure", nom: "Harnois complet de Chevalier", prix: 1500, url: "http://localhost:3000/img/armures/armure-plate.png" },
    { id: 22, theme: "Armure", nom: "Bouclier à armoiries", prix: 250, url: "http://localhost:3000/img/armures/bouclier.png" },
    { id: 23, theme: "Armure", nom: "Casque à visière (Haume)", prix: 180, url: "http://localhost:3000/img/armures/haume.png" },
    { id: 24, theme: "Armure", nom: "Cotte de mailles renforcée", prix: 600, url: "http://localhost:3000/img/armures/cotte-mailles.png" },
    { id: 25, theme: "Armure", nom: "Gantelets de fer", prix: 90, url: "http://localhost:3000/img/armures/gantelets.png" },
    { id: 26, theme: "Armure", nom: "Jambières de plaques", prix: 220, url: "http://localhost:3000/img/armures/jambieres.png" },
    { id: 27, theme: "Armure", nom: "Cuirasse de cuir bouilli", prix: 110, url: "http://localhost:3000/img/armures/cuirasse.png" },
    { id: 28, theme: "Armure", nom: "Bouclier de tour massif", prix: 400, url: "http://localhost:3000/img/armures/bouclier-tour.png" },
    { id: 29, theme: "Armure", nom: "Épaulières d'acier", prix: 140, url: "http://localhost:3000/img/armures/epaulieres.png" },
    { id: 30, theme: "Armure", nom: "Armure d'apparat en Or", prix: 5000, url:"http://localhost:3000/img/armures/armure-or.png" },

    // --- THÈME : APOTHICAIRE (Potions et Plantes) ---
    { id: 31, theme: "Alchimie", nom: "Potion de Soins Mineure", prix: 50, url: "http://localhost:3000/img/alchimies/potion-soins.png" },
    { id: 32, theme: "Alchimie", nom: "Élixir de Force", prix: 250, url: "http://localhost:3000/img/alchimies/elixir.png" },
    { id: 33, theme: "Alchimie", nom: "Antidote Universel", prix: 80, url: "http://localhost:3000/img/alchimies/antidote.png" },
    { id: 34, theme: "Alchimie", nom: "Fiole de Poison de Manticore", prix: 600, url: "http://localhost:3000/img/alchimies/poison.png" },
    { id: 35, theme: "Alchimie", nom: "Potion de Vision Nocturne", prix: 120, url: "http://localhost:3000/img/alchimies/potion-vision.png" },
    { id: 36, theme: "Alchimie", nom: "Herbes de Rêve séchées", prix: 30, url: "http://localhost:3000/img/alchimies/herbes.png" },
    { id: 37, theme: "Alchimie", nom: "Mandragore fraîche", prix: 150, url: "http://localhost:3000/img/alchimies/mandragore.png" },
    { id: 38, theme: "Alchimie", nom: "Poudre de Corne de Licorne", prix: 2000, url: "http://localhost:3000/img/alchimies/poudre-licorne.png" },
    { id: 39, theme: "Alchimie", nom: "Essence de Feu liquide", prix: 450, url: "http://localhost:3000/img/alchimies/essence-feu.png" },
    { id: 40, theme: "Alchimie", nom: "Pierre Philosophale (Fragment)", prix: 10000, url: "http://localhost:3000/img/alchimies/pierre-philosophale.png" },

    // --- THÈME : AVENTURIER (Divers) ---
    { id: 41, theme: "Divers", nom: "Sac de couchage en peau d'ours", prix: 40, url: "http://localhost:3000/img/divers/sac-couchage.png" },
    { id: 42, theme: "Divers", nom: "Lanterne à huile", prix: 25, url: "http://localhost:3000/img/divers/lanterne.png" },
    { id: 43, theme: "Divers", nom: "Corde en chanvre (20m)", prix: 15, url: "http://localhost:3000/img/divers/corde.png" },
    { id: 44, theme: "Divers", nom: "Sac à dos en cuir robuste", prix: 85, url: "http://localhost:3000/img/divers/sac-dos.png" },
    { id: 45, theme: "Divers", nom: "Rations de voyage (7 jours)", prix: 20, url: "http://localhost:3000/img/divers/rations.png" },
    { id: 46, theme: "Divers", nom: "Boussole de Gnomeregan", prix: 110, url: "http://localhost:3000/img/divers/boussole.png" },
    { id: 47, theme: "Divers", nom: "Piolet d'escalade", prix: 55, url: "http://localhost:3000/img/divers/piolet.png" },
    { id: 48, theme: "Divers", nom: "Corne de brume", prix: 65, url: "http://localhost:3000/img/divers/corne.png" },
    { id: 49, theme: "Divers", nom: "Tente 2 places en toile", prix: 130, url: "http://localhost:3000/img/divers/tente.png" },
    { id: 50, theme: "Divers", nom: "Carte au trésor scellée", prix: 1500, url: "http://localhost:3000/img/divers/carte.png" }
];

let sessions = []; 
let utilisateurs = [
    { 
        email: "a@a.com", 
        password: "root", 
        admin: true 
    },
    { 
        email: "b@b.com", 
        password: "azerty", 
        admin: false 
    },
    { 
        email: "c@c.com", 
        password: "qwerty", 
        admin: false 
    }
];

// Login [cite: 159]
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = utilisateurs.find(u => u.email === email && u.password === password);
    if (user) return res.json(user);
    res.status(401).json({ error: "Identifiants invalides" });
});

app.post('/sessions', (req, res) => {
    const { nom, createur } = req.body;
    if (!nom) return res.status(400).json({ error: "Nom de session requis" });
    
    const selection = [...produits].sort(() => 0.5 - Math.random()).slice(0, 4);
    const nouvelleSession = { nom, createur, produits: selection, participants: [] };
    sessions.push(nouvelleSession);
    res.json(nouvelleSession);
});

app.get('/sessions', (req, res) => res.json(sessions));

app.post('/sessions/:nom/reponse', (req, res) => {
    const session = sessions.find(s => s.nom === req.params.nom);
    const { email, prixPropose, index } = req.body;
    
    const prixReel = session.produits[index].prix;

    const difference = Math.abs(prixReel - prixPropose);
    const erreurRelative = difference / prixReel;

    const points = Math.max(0, Math.round(100 - (erreurRelative * 400)));

    let participant = session.participants.find(p => p.utilisateur === email);
    if (!participant) {
        participant = { utilisateur: email, score: 0 };
        session.participants.push(participant);
    }
    
    participant.score += points;

    res.json({ prixReel, pointsObtenus: points });
});

app.listen(3000, () => console.log("Serveur Just-Price lancé sur le port 3000"));