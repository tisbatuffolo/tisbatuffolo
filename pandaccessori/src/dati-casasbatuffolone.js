/**
 * DATABASE PANDACCESSORI
 * * Legenda ID_LOCATION: 1=Casa, 2=Konad, 3=Progetto, 4=Cameretta, 5=Gazy
 * Legenda ID_STANZA: 1=Salotto, 2=Cucina, 3=Terrazzo, 4=Corridoio, 5=Bagno, 6=Camera, 7=Cantina
 * Legenda ID_CONTENITORE: 0=Nessuno, 1=Mondo, 2=PandaBox
 */

const pandaccessoriDataCasa = [
        {
        id: "1_1_0_Mondo", // Segue la tua codifica
        titolo: "Mondo",
        commento: "Un mondo di ricordi!",
        immagine: "img/casasbatuffolone/1_1_0_Mondo.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 1,        // Salotto
        contenitore: 0,   // No
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 105.5, 
        posY: 60.2 
    },
        {
        id: "1_1_0_PandaLume", // Segue la tua codifica
        titolo: "PandaLume",
        commento: "Illuminiamo i nostri ricordi!",
        immagine: "img/casasbatuffolone/1_1_0_PandaLume.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 1,        // Salotto
        contenitore: 0,   // No
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 45.5, 
        posY: 60.2 
    },
        {
        id: "1_1_1_Calamita", // Segue la tua codifica
        titolo: "Calamita",
        commento: "la calamita sul mondo!",
        immagine: "img/casasbatuffolone/1_1_1_Calamita.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 1,        // Salotto
        contenitore: 1,   // Mondo
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 105.5, 
        posY: 60.2 
    },
        {
        id: "1_2_0_PandaBox", // Segue la tua codifica
        titolo: "PandaBox",
        commento: "Cerca nella PandaBox!",
        immagine: "img/casasbatuffolone/1_2_0_PandaBox.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 2,        // Cucina
        contenitore: 0,   // No
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 100.5, 
        posY: 100.2 
    },
        {
        id: "1_2_0_PandaMetro", // Segue la tua codifica
        titolo: "PandaMetro",
        commento: "Cerca nella PandaBox!",
        immagine: "img/casasbatuffolone/1_2_0_PandaMetro.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 2,        // Cucina
        contenitore: 0,   // No
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 20.5, 
        posY: 20.2 
    },
        {
        id: "1_2_2_PandaSticker", // Segue la tua codifica
        titolo: "PandaSticker",
        commento: "Attacchiamoli dappertutto!",
        immagine: "img/casasbatuffolone/1_2_2_PandaSticker.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 2,        // Cucina
        contenitore: 2,   // PandaBox
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 20.5, 
        posY: 20.2 
    },
        {
        id: "1_4_0_Appandino", // Segue la tua codifica
        titolo: "Appandino",
        commento: "Panda orsetto e procione!!",
        immagine: "img/casasbatuffolone/1_4_0_Appandino.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 4,        // Corridoio
        contenitore: 0,   // NO
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 80.5, 
        posY: 20.2 
    },
        {
        id: "1_5_0_PortaSpazzolino", // Segue la tua codifica
        titolo: "PortaSpazzolino",
        commento: "La coccinella dove riporre dentifrixio e spazzolino!",
        immagine: "img/casasbatuffolone/1_5_0_PortaSpazzolino.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 5,        // Bagno
        contenitore: 0,   // NO
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 87.5, 
        posY: 20.2 
    },
        {
        id: "1_6_0_PandAnello", // Segue la tua codifica
        titolo: "PandAnello",
        commento: "Un annello per unirli e coccolosamente legarli!",
        immagine: "img/casasbatuffolone/1_6_0_PandAnello.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 6,        // Camera
        contenitore: 0,   // NO
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 187.5, 
        posY: 20.2 
    },
        {
        id: "1_7_0_PandaMeter", // Segue la tua codifica
        titolo: "PandaMeter",
        commento: "Quando stiamo insieme si alza la temperatura!",
        immagine: "img/casasbatuffolone/1_7_0_PandaMeter.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 7,        // Terrazzo
        contenitore: 0,   // NO
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 111.5, 
        posY: 20.2 
    },
        {
        id: "1_8_0_CoseNatale", // Segue la tua codifica
        titolo: "CoseNatale",
        commento: "Accendiamo le lucine!",
        immagine: "img/casasbatuffolone/1_8_0_CoseNatale.jpg",
        location: 1,      // Casa Sbatuffolone
        stanza: 8,        // Garage
        contenitore: 0,   // NO
        // Coordinate per il marker sulla planimetria (valori in %)
        posX: 0.0, 
        posY: 0.0 
    }
    // Aggiungi qui tutti gli altri pandaccessori...
];

