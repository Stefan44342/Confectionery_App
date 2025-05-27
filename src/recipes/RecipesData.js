export const categories = [
    { id: 'all', name: 'Toate' },
    { id: 'classic', name: 'Clasice' },
    { id: 'seasonal', name: 'Sezoniere' },
    { id: 'without-sugar', name: 'Fără Zahăr' },
    { id: 'without-gluten', name: 'Fără Gluten' },
    { id: 'vegan', name: 'Post/Vegan' }
  ];
  
export const recipes = [
    {
      id: 1,
      title: "Checul bunicii cu cacao și nucă",
      excerpt: "Rețeta tradițională de chec cu aromă intensă de cacao și textură moale, îmbogățită cu miez de nucă.",
      image: "/chec.png",
      category: "classic",
      difficulty: "Ușor",
      prepTime: "20 minute",
      cookTime: "45 minute",
      story: "Checul cu cacao și nucă este unul dintre deserturile care evocă amintiri din copilărie pentru mulți dintre noi. Această rețetă a fost transmisă din generație în generație în familia noastră și a devenit rapid unul dintre favoritele clienților cofetăriei.",
      ingredients: [
        "250g făină",
        "200g zahăr",
        "3 ouă",
        "150ml lapte",
        "100g unt",
        "50g cacao",
        "100g nucă măcinată",
        "1 plic praf de copt",
        "1 esență de vanilie",
        "Un praf de sare"
      ],
      instructions: [
        "Preîncălzește cuptorul la 180°C și tapetează o formă de chec cu hârtie de copt.",
        "Amestecă untul moale cu zahărul până obții o cremă pufoasă.",
        "Adaugă ouăle unul câte unul, amestecând bine după fiecare.",
        "Încorporează esența de vanilie.",
        "Într-un alt bol, amestecă făina cu cacaoa, praful de copt și sarea.",
        "Adaugă alternativ ingredientele uscate și laptele în crema de unt, amestecând ușor.",
        "La final, adaugă nuca măcinată și amestecă delicat.",
        "Toarnă compoziția în forma pregătită și nivelează suprafața.",
        "Coace pentru 45-50 minute sau până când o scobitoare introdusă în centru iese curată.",
        "Lasă să se răcească în formă timp de 10 minute, apoi transferă pe un grătar pentru răcire completă."
      ],
      tips: [
        "Pentru un plus de aromă, poți adăuga coajă rasă de portocală.",
        "Nuca poate fi prăjită ușor înainte pentru o aromă mai intensă.",
        "Checul se păstrează proaspăt până la 5 zile într-un recipient etanș."
      ]
    },
    {
      id: 2,
      title: "Tartă cu fructe de pădure și cremă de vanilie",
      excerpt: "O tartă elegantă cu o combinație perfectă între crema fină de vanilie și aciditatea fructelor de pădure proaspete.",
      image: "/tarta.png",
      category: "seasonal",
      difficulty: "Mediu",
      prepTime: "40 minute",
      cookTime: "30 minute",
      story: "Această tartă este inspirată din plimbările noastre prin pădurile montane în timpul verii, când culegem fructe de pădure proaspete. Combinația dintre aluatul fraged, crema mătăsoasă de vanilie și prospețimea fructelor creează un desert perfect pentru zilele călduroase de vară.",
      ingredients: [
        "Pentru aluat: 250g făină, 125g unt rece, 50g zahăr pudră, 1 ou, un praf de sare",
        "Pentru cremă: 500ml lapte, 4 gălbenușuri, 100g zahăr, 40g amidon, 1 păstaie de vanilie",
        "Pentru topping: 400g mix de fructe de pădure (zmeură, afine, mure), 3 linguri zahăr, suc de lămâie, 2 linguri amidon"
      ],
      instructions: [
        "Prepară aluatul amestecând făina cu zahărul pudră și sarea. Adaugă untul rece tăiat cuburi și frământă până obții o textură nisipoasă.",
        "Adaugă oul și frământă scurt până se leagă aluatul. Formează o bilă, învelește în folie și refrigerează 30 minute.",
        "Întinde aluatul și așează-l într-o formă de tartă. Înțeapă fundul cu o furculiță și coace în alb la 180°C pentru 15 minute.",
        "Pentru cremă, încălzește laptele cu semințele de vanilie. Separat, amestecă gălbenușurile cu zahărul și amidonul.",
        "Toarnă treptat laptele fierbinte peste amestecul de gălbenușuri, amestecând continuu, apoi pune totul înapoi pe foc mic și amestecă până se îngroașă.",
        "Răcește crema acoperită cu folie alimentară lipită de suprafață pentru a evita formarea crustei.",
        "Pentru topping, încălzește fructele cu zahărul și sucul de lămâie. Adaugă amidonul dizolvat în puțină apă și fierbe până se îngroașă ușor.",
        "Asamblează tarta: întinde crema de vanilie peste baza coaptă și răcită, apoi adaugă fructele de pădure deasupra.",
        "Refrigerează cel puțin 2 ore înainte de servire."
      ],
      tips: [
        "Folosește fructe proaspete pentru cel mai bun gust, dar poți utiliza și fructe congelate în afara sezonului.",
        "Crema de vanilie poate fi preparată cu o zi înainte.",
        "Pentru un plus de strălucire, poți glazura fructele cu puțin jeleu de caise."
      ]
    },
    {
      id: 3,
      title: "Prăjitură raw vegan cu ciocolată și avocado",
      excerpt: "Un desert raw vegan delicios și nutritiv, perfect pentru iubitorii de ciocolată care caută alternative sănătoase.",
      image: "/raw-vegan.png",
      category: "vegan",
      difficulty: "Ușor",
      prepTime: "30 minute",
      cookTime: "0 minute (+ 4 ore refrigerare)",
      story: "Această prăjitură a fost creată din dorința de a oferi un desert delicios pentru clienții noștri care urmează un stil de viață vegan sau raw vegan. Am descoperit că avocado-ul nu doar că oferă o textură incredibil de cremoasă, dar amplifică și gustul ciocolatei, creând un desert decadent care nu conține zahăr procesat sau produse de origine animală.",
      ingredients: [
        "Pentru bază: 200g nuci (migdale, caju sau mix), 150g curmale, 2 linguri cacao raw, un praf de sare",
        "Pentru cremă: 2 avocado coapte, 60g cacao raw, 120ml sirop de arțar sau agave, 2 linguri ulei de cocos, 1 linguriță extract de vanilie",
        "Pentru decor: fructe de pădure, fulgi de cocos, bucăți de ciocolată raw"
      ],
      instructions: [
        "Tapetează o formă rotundă (20cm) cu hârtie de copt.",
        "Pentru bază, procesează nucile în blender până devin făină grosieră. Adaugă curmalele, cacaua și sarea și procesează până se formează o compoziție lipicioasă.",
        "Presează amestecul în forma pregătită, formând o bază uniformă, și pune-o la frigider.",
        "Pentru cremă, mixează toate ingredientele în blender până obții o textură fină și cremoasă.",
        "Toarnă crema peste bază și nivelează suprafața.",
        "Decorează cu fructe de pădure, fulgi de cocos sau bucăți de ciocolată raw.",
        "Refrigerează cel puțin 4 ore sau peste noapte înainte de servire."
      ],
      tips: [
        "Asigură-te că avocado este bine copt pentru o textură perfect cremoasă.",
        "Prăjitura se poate congela până la 1 lună.",
        "Pentru o versiune mai dulce, poți adăuga mai mult sirop de arțar sau câteva curmale în cremă."
      ]
    },
    {
      id: 4,
      title: "Prăjituri cu lămâie și mac fără gluten",
      excerpt: "Prăjituri ușoare și aromate cu lămâie și mac, perfecte pentru cei cu intoleranță la gluten.",
      image: "/prajitara-lamaie.png",
      category: "without-gluten",
      difficulty: "Mediu",
      prepTime: "25 minute",
      cookTime: "20 minute",
      story: "Această rețetă a fost dezvoltată special pentru clienta noastră Maria, care suferea de boala celiacă dar iubea prăjiturile cu lămâie. După mai multe încercări, am reușit să creăm aceste delicii fără gluten care sunt la fel de pufoase și gustoase ca versiunea tradițională. De atunci, au devenit unul dintre cele mai populare produse din gama noastră fără gluten.",
      ingredients: [
        "200g mix de făină fără gluten",
        "100g unt la temperatura camerei",
        "150g zahăr",
        "2 ouă mari",
        "Coaja rasă și sucul de la 2 lămâi",
        "2 linguri semințe de mac",
        "1 linguriță praf de copt fără gluten",
        "100ml iaurt grecesc",
        "1 praf de sare"
      ],
      instructions: [
        "Preîncălzește cuptorul la 180°C și pregătește o tavă de brioșe cu 12 forme.",
        "Amestecă untul moale cu zahărul până obții o cremă pufoasă.",
        "Adaugă ouăle unul câte unul, amestecând bine după fiecare.",
        "Încorporează coaja rasă și sucul de lămâie.",
        "Într-un bol separat, amestecă făina fără gluten cu praful de copt, semințele de mac și sarea.",
        "Adaugă alternativ ingredientele uscate și iaurtul în compoziția umedă, amestecând ușor.",
        "Distribuie aluatul în formele pregătite, umplându-le aproximativ 2/3.",
        "Coace pentru 18-20 minute sau până când prăjiturile sunt aurii și trec testul scobitorii.",
        "Lasă-le să se răcească complet înainte de servire."
      ],
      tips: [
        "Verifică întotdeauna că toate ingredientele sunt certificate fără gluten.",
        "Pentru un plus de aromă, poți adăuga și puțină esență de vanilie.",
        "Se păstrează proaspete până la 3 zile într-un recipient etanș."
      ]
    },
    {
      id: 5,
      title: "Înghețată de vanilie cu fructe confiate fără zahăr",
      excerpt: "O înghețată cremoasă îndulcită natural, perfectă pentru cei care evită zahărul rafinat.",
      image: "/inghetata.png",
      category: "without-sugar",
      difficulty: "Mediu",
      prepTime: "30 minute",
      cookTime: "4 ore refrigerare",
      story: "După ce am primit numeroase cereri de la clienții noștri care doreau să reducă consumul de zahăr rafinat, am început să experimentăm cu alternative naturale. Această înghețată a depășit toate așteptările noastre - este la fel de cremoasă și dulce ca versiunea clasică, dar folosește doar îndulcitori naturali. Fructele confiate fără zahăr adaugă textură și un plus de aromă.",
      ingredients: [
        "400ml smântână pentru frișcă (minim 30% grăsime)",
        "200ml lapte de cocos (conservă)",
        "3 gălbenușuri mari",
        "80g miere sau sirop de arțar",
        "1 păstaie de vanilie sau 2 lingurițe extract de vanilie",
        "100g mix de fructe confiate fără zahăr (mere, pere, caise)",
        "Un praf de sare"
      ],
      instructions: [
        "Încălzește laptele de cocos cu semințele de vanilie într-o cratiță la foc mediu (nu fierbe).",
        "Separat, bate gălbenușurile cu mierea și sarea până obții o cremă deschisă la culoare.",
        "Toarnă treptat laptele cald peste amestecul de gălbenușuri, amestecând continuu.",
        "Pune amestecul înapoi în cratiță și gătește la foc mic, amestecând constant, până se îngroașă ușor și acoperă spatele lingurii.",
        "Lasă crema să se răcească complet.",
        "Bate smântâna pentru frișcă până devine pufoasă dar nu complet fermă.",
        "Încorporează delicat crema răcită în smântâna bătută.",
        "Adaugă fructele confiate tăiate bucățele mici și amestecă ușor.",
        "Toarnă compoziția într-un recipient pentru înghețată și congelează minim 4 ore, amestecând la fiecare oră în primele 3 ore pentru a preveni formarea cristalelor de gheață."
      ],
      tips: [
        "Poți folosi orice combinație de fructe confiate fără zahăr preferi.",
        "Pentru o textură și mai cremoasă, adaugă un vârf de cuțit de gumă xantan înainte de congelare.",
        "Scoate înghețata din congelator cu 10-15 minute înainte de servire pentru a o înmuia ușor."
      ]
    },
    {
      id: 6,
      title: "Cozonac tradițional cu nucă și cacao",
      excerpt: "Rețeta clasică de cozonac românesc, perfect pentru sărbători și ocazii speciale.",
      image: "/cozonac.png",
      category: "classic",
      difficulty: "Ridicat",
      prepTime: "60 minute",
      cookTime: "50 minute (+ 2 ore dospire)",
      story: "Cozonacul este desertul care nu lipsește de pe mesele românilor de sărbători. Această rețetă este una transmisă din generație în generație în familia fondatorului cofetăriei noastre. Ne-am străduit să păstrăm autenticitatea și gustul tradițional, adaptând doar tehnica pentru rezultate consistente. Aroma de cozonac proaspăt scos din cuptor aduce amintiri dragi și crează atmosfera perfectă de sărbătoare.",
      ingredients: [
        "1kg făină de calitate",
        "500ml lapte",
        "200g zahăr",
        "200g unt",
        "6 gălbenușuri",
        "40g drojdie proaspătă",
        "Coajă rasă de lămâie și portocală",
        "1 lingură esență de rom",
        "1 praf de sare",
        "Pentru umplutură: 400g nucă măcinată, 100g zahăr, 50g cacao, 100ml lapte, 1 lingură esență de rom"
      ],
      instructions: [
        "Pregătește maiaua: încălzește 100ml lapte, adaugă o linguriță de zahăr și drojdia sfărâmată. Lasă la dospit 10-15 minute.",
        "Într-un bol mare, amestecă făina cu zahărul și sarea.",
        "Încălzește restul de lapte și adaugă untul să se topească ușor.",
        "Adaugă maiaua peste făină, apoi gălbenușurile, laptele cu unt, coaja rasă și esența de rom.",
        "Frământă aluatul aproximativ 20-30 minute până devine elastic și nu se mai lipește de mâini.",
        "Acoperă și lasă la dospit într-un loc cald până își dublează volumul (aproximativ 1-1,5 ore).",
        "Între timp, prepară umplutura: amestecă nuca cu zahărul, cacaoa, laptele cald și esența de rom.",
        "După ce aluatul a dospit, împarte-l în patru bucăți egale.",
        "Întinde fiecare bucată într-un dreptunghi, distribuie umplutura și rulează strâns.",
        "Împletește câte două rulouri pentru a forma doi cozonaci și așază-i în forme tapetate cu hârtie de copt.",
        "Lasă cozonacii să mai dospească aproximativ 30 minute.",
        "Unge suprafața cu gălbenuș amestecat cu puțin lapte.",
        "Coace la 170°C pentru 45-50 minute, acoperind cu folie după primele 25 minute dacă se rumenesc prea tare.",
        "Verifică coacerea cu o scobitoare și lasă să se răcească în forme."
      ],
      tips: [
        "Toate ingredientele trebuie să fie la temperatura camerei.",
        "Frământă aluatul cu răbdare - acest pas este crucial pentru un cozonac pufos.",
        "Nu deschide cuptorul în primele 25 minute de coacere.",
        "Pentru un aspect lucios, poți unge cozonacii fierbinți cu sirop de zahăr."
      ]
    },
    {
      id: 7,
      title: "Tort de mere caramelizate fără zahăr",
      excerpt: "Un desert sofisticat, dar sănătos, cu mere caramelizate în sirop de curmale.",
      image: "/tort-mere.png",
      category: "without-sugar",
      difficulty: "Mediu",
      prepTime: "40 minute",
      cookTime: "45 minute",
      story: "Acest tort a fost creat pentru a demonstra că deserturile fără zahăr pot fi la fel de spectaculoase și delicioase. Inspirat din clasicul tarte tatin francez, am înlocuit zahărul cu un sirop natural din curmale și am folosit făină integrală pentru un plus de nutrienți. Rezultatul este un desert elegant, cu arome complexe, dar fără zahăr adăugat.",
      ingredients: [
        "Pentru caramelizarea merelor: 6 mere mari (de preferat soiuri acre), 100g pastă de curmale, 50ml apă, 1 baton de scorțișoară, 50g unt",
        "Pentru aluat: 250g făină integrală, 150g unt rece, 1 ou, 50g pastă de curmale, 60ml apă, 1 praf de sare, 1 linguriță scorțișoară",
        "Pentru servire: iaurt grecesc sau frișcă fără zahăr"
      ],
      instructions: [
        "Preîncălzește cuptorul la 180°C și pregătește o formă rotundă de tort.",
        "Pentru siropul de caramel, încălzește pasta de curmale cu apa și scorțișoara, amestecând până obții un sirop omogen.",
        "Adaugă untul și amestecă până se topește complet.",
        "Curăță merele, taie-le în felii și aranjează-le frumos în forma de tort, apoi toarnă siropul de caramel peste ele.",
        "Pentru aluat, amestecă făina cu sarea și scorțișoara.",
        "Adaugă untul rece tăiat cuburi și frământă până obții o consistență nisipoasă.",
        "Într-un bol separat, amestecă oul cu pasta de curmale și apa.",
        "Adaugă amestecul lichid peste făină și frământă scurt până se formează un aluat omogen.",
        "Întinde aluatul și așază-l peste merele caramelizate, apăsând ușor marginile.",
        "Coace pentru 40-45 minute sau până când aluatul este auriu și merele sunt moi.",
        "Lasă să se răcească 10 minute în formă, apoi răstoarnă cu atenție pe un platou."
      ],
      tips: [
        "Folosește mere acre precum Granny Smith pentru un contrast perfect cu dulceața natural.",
        "Pasta de curmale poate fi înlocuită cu pastă de smochine sau prune uscate.",
        "Servește tortul călduț cu iaurt grecesc sau frișcă bătută fără zahăr."
      ]
    },
    {
      id: 8,
      title: "Biscuiți fragezi cu lavandă și lămâie",
      excerpt: "Biscuiți delicați cu aromă subtilă de lavandă și prospătura lămâiei, perfecti alături de ceai.",
      image: "/biscuiti.png",
      category: "seasonal",
      difficulty: "Ușor",
      prepTime: "20 minute",
      cookTime: "12 minute (+ 1 oră refrigerare)",
      story: "Inspirați de grădinile provensale, am creat acești biscuiți eleganți care combină delicatețea lavandei cu prospețimea lămâiei. Îi producem în sezonul de vară când lavanda noastră organică este la apogeu. Acești biscuiți au devenit rapid favoriți pentru evenimente precum nunți, petreceri în grădină și ceaiuri afteroon elegante.",
      ingredients: [
        "250g făină",
        "150g unt la temperatura camerei",
        "100g zahăr pudră",
        "1 ou",
        "Coaja rasă de la 2 lămâi",
        "1-2 lingurițe flori de lavandă comestibile, măcinate fin",
        "1 praf de sare",
        "1/2 linguriță extract de vanilie"
      ],
      instructions: [
        "Într-un bol mare, amestecă untul moale cu zahărul pudră până obții o cremă pufoasă.",
        "Adaugă oul și extractul de vanilie și amestecă bine.",
        "Încorporează coaja de lămâie și florile de lavandă măcinate.",
        "Adaugă făina și sarea și amestecă până se formează un aluat omogen.",
        "Formează un rulou cu aluatul, învelește-l în folie alimentară și refrigerează pentru cel puțin 1 oră.",
        "Preîncălzește cuptorul la 180°C și tapetează o tavă cu hârtie de copt.",
        "Taie biscuiți de aproximativ 1 cm grosime din rulou și aranjează-i în tavă, lăsând spațiu între ei.",
        "Coace pentru 10-12 minute sau până când marginile devin ușor aurii.",
        "Lasă biscuiții să se răcească complet înainte de a-i servi."
      ],
      tips: [
        "Asigură-te că folosești lavandă comestibilă, cultivată organic.",
        "Nu exagera cu cantitatea de lavandă - aroma sa poate deveni ușor dominantă.",
        "Pentru un aspect festiv, poți presăra florele de lavandă pe suprafața biscuiților înainte de coacere."
      ]
    }
  ];