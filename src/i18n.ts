import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero": {
        "badge": "NASA Space Apps Challenge 2025",
        "title": "Watch the pulse of life of our planet",
        "titleHighlight": "pulse of life",
        "subtitle": "We transform satellite data into a strategic tool for smart agriculture and environmental conservation",
        "cta1": "View Application",
        "cta2": "Learn More",
        "stats": {
          "efficiency": "Anual data accuracy",
          "monitoring": "Global Monitoring",
          "prediction": "Prediction", 
          "droughtPrediction": "Droughts and climate change"
        }
      },
      "problemSolution": {
        "problem": {
          "badge": "The Challenge",
          "title": "Vegetation is changing",
          "points": {
            "climate": "Climate change alters natural flowering patterns",
            "data": "Farmers lack accurate data to optimize resources",
            "policies": "Environmental policies need real-time information",
            "biodiversity": "Loss of biodiversity without effective monitoring systems"
          }
        },
        "solution": {
          "badge": "Our Solution",
          "title": "BLOOMBLY: Intelligence from space",
          "points": {
            "monitoring": "Real-time monitoring of global flowering events",
            "prediction": "Flowering prediction by region using ML and NASA data",
            "reports": "Soil analysis and climate condition reports by region and plant type",
            "data": "Actionable data for informed decision-making in multiple areas"
          }
        }
      },
      "impact": {
        "title": "How our model helps in ",
        "titleHighlight": "the real world?",
        "subtitle": "We transform satellite observation into concrete solutions.",
        "agriculture": {
          "title": "Smart Agriculture",
          "description": "Resource optimization and increased productivity",
          "benefits": {
            "prediction": "Accurate flowering prediction by region",
            "optimization": "Irrigation and fertilization optimization by soil analysis",
            "management": "ssss",
          }
        },
        "biodiversity": {
          "title": "Biodiversity & Climate",
          "description": "Environmental monitoring for data-driven policies",
          "benefits": {
            "detection": "Early detection of environmental stress",
            "policies": "Data for effective public policies",
            "prioritization": "Resource prioritization in critical areas",
            "tracking": "Invasive species tracking"
          }
        }
      },
      "features": {
        "title": "How do we ",
        "titleHighlight": "do it?",
        "subtitle": "We combine the best of space observation with advanced artificial intelligence",
        "exploreButton": "Explore Plant Species",
        "items": {
          "precise": {
            "title": "Precise Data",
            "description": "Direct access to satellite observations."
          },
          "ml": {
            "title": "Machine Learning",
            "description": "Predictive models trained with historical and climate data"
          },
          "global": {
            "title": "Global Coverage",
            "description": "Monitoring from local scale to complete planetary coverage"
          },
          "realtime": {
            "title": "Real Time",
            "description": "Continuous updates for timely decisions"
          }
        }
      },
      "useCases": {
        "title": "Where is it ",
        "titleHighlight": "useful",
        "titleEnd": "?",
        "subtitle": "Solutions adapted for each sector of the agricultural and environmental ecosystem",
        "sectors": {
          "environmental": {
            "sector": "Environmental Organizations",
            "title": "Smart Conservation",
            "description": "Track changes in flowering patterns to identify climate change impacts and manage biodiversity proactively.",
            "stats": "Real time"
          },
          "private": {
            "sector": "Private Sector",
            "title": "Strategic Planning",
            "description": "Agricultural and food companies can use our model to generate summaries and develop strategic plans for exports, sustainable certifications, and logistics improvement.",
            "stats": "Operational Efficiency"
          },
          "government": {
            "sector": "Governments",
            "title": "Data-Driven Policies",
            "description": "Automatic monitoring of national territory. Detects climate stress zones, prioritizes resources and designs effective environmental policies.",
            "stats": "National scale"
          },
          "farmers": {
            "sector": "Farmers",
            "title": "Maximize Your Harvest",
            "description": "Optimize irrigation, fertilization, and hive management with constantly updated data to increase yield and reduce costs.",
            "stats": "98.6% Anual data accuracy"
          }
        }
      },
      "cta": {
        "title": "Transform satellite data into ",
        "titleHighlight": "strategic decisions",
        "description": "The vegetation monitoring revolution. Produce more, conserve better and respond earlier to planetary changes.",
        "button1": "Explore BLOOMBLY",
        "button2": "Learn More"
      },
      "footer": {
        "tagline": "Built with Machine Learning",
        "links": {
          "about": "About",
          "technology": "Technology",
          "useCases": "Use Cases",
          "contact": "Contact"
        },
        "copyright": "© 2025 BLOOMBLY",
        "challenge": "NASA Space Apps Challenge"
      },
      "language": {
        "spanish": "Español",
        "english": "English"
      },
      "plantsGallery": {
        "badge": "Species Gallery",
        "title": "Discover Our",
        "titleHighlight": "33 Species",
        "subtitle": "Explore the diversity of plants monitored by our artificial intelligence platform",
        "family": "Family:",
        "funFact": "Fun fact:",
        "plants": {
          "astragalus": {
            "name": "Alpine Milkvetch",
            "scientificName": "Astragalus alpinus",
            "family": "Fabaceae",
            "description": "A low-growing perennial from the legume family, often found in alpine or arctic regions. It forms mats and produces clusters of purple to lilac flowers.",
            "funFact": "Some Astragalus species are known as 'locoweed' because they can be toxic to livestock, causing strange neurological effects."
          },
          "cardamine": {
            "name": "Cuckoo Flower",
            "scientificName": "Cardamine pratensis",
            "family": "Brassicaceae",
            "description": "A herbaceous perennial known for its delicate, pale pink or white flowers that appear in spring. It commonly grows in damp meadows and grasslands.",
            "funFact": "Its name comes from the belief that it blooms when the cuckoo bird begins to call in the spring."
          },
          "cerastium": {
            "name": "Snow-in-Summer",
            "scientificName": "Cerastium tomentosum",
            "family": "Caryophyllaceae",
            "description": "A popular ground cover plant prized for its silvery-gray foliage and a profusion of star-like white flowers that create a snow-like effect.",
            "funFact": "This plant is extremely drought-tolerant and thrives in poor, rocky soil where many other plants would fail."
          },
          "chrysanthemum": {
            "name": "Florist's Daisy",
            "scientificName": "Chrysanthemum morifolium",
            "family": "Asteraceae",
            "description": "A classic garden favorite, cultivated for thousands of years. It produces a wide variety of colorful, complex flower heads, typically blooming in the fall.",
            "funFact": "In Japan, the Chrysanthemum is a symbol of the Emperor and the Imperial family, and the 'Chrysanthemum Throne' is the name given to the position of Emperor."
          },
          "crotalaria": {
            "name": "Green Birdflower",
            "scientificName": "Crotalaria cunninghamii",
            "family": "Fabaceae",
            "description": "An extraordinary plant from Australia known for its green flowers that bear a striking resemblance to a hummingbird feeding from the stem.",
            "funFact": "The unique bird-like shape of the flower is a clever example of mimicry, though it's still pollinated by birds and bees."
          },
          "delphinium": {
            "name": "Alpine Larkspur",
            "scientificName": "Delphinium elatum",
            "family": "Ranunculaceae",
            "description": "Known for its tall, dramatic spires of densely packed flowers, typically in shades of blue. A classic cottage garden plant, but all parts are toxic.",
            "funFact": "The name 'Delphinium' comes from the ancient Greek word for dolphin, as the shape of the nectary was thought to resemble a dolphin."
          },
          "draba": {
            "name": "Spring Whitlow-grass",
            "scientificName": "Draba verna",
            "family": "Brassicaceae",
            "description": "A tiny, early-flowering annual that is often one of the first signs of spring. It forms a small rosette of leaves and produces delicate, four-petaled white flowers.",
            "funFact": "This tiny plant can complete its entire life cycle, from germination to seed production, in as little as one month."
          },
          "erigeron": {
            "name": "Seaside Daisy",
            "scientificName": "Erigeron glaucus",
            "family": "Asteraceae",
            "description": "A tough, salt-tolerant perennial native to coastlines. It forms a low mound of blue-green leaves and produces cheerful lavender daisy-like flowers.",
            "funFact": "Its genus name 'Erigeron' means 'early old man' in Greek, referring to the fact that many species flower early and have white, hairy seeds that resemble an old man's beard."
          },
          "euphorbia": {
            "name": "Crown of Thorns",
            "scientificName": "Euphorbia milii",
            "family": "Euphorbiaceae",
            "description": "A succulent shrub known for its dense, sharp thorns and brightly colored bracts that surround tiny flowers. Contains a milky white sap that is an irritant.",
            "funFact": "Legend says this species was the plant used to create the thorny crown placed on Jesus's head before the crucifixion."
          },
          "helichrysum": {
            "name": "Curry Plant",
            "scientificName": "Helichrysum italicum",
            "family": "Asteraceae",
            "description": "A small shrub with silver foliage that releases a strong curry-like aroma. It produces clusters of small, yellow, straw-like flowers.",
            "funFact": "Despite its strong curry scent, it is not used for cooking. The aroma is released when the leaves are bruised or warmed by the sun."
          },
          "hieracium": {
            "name": "Orange Hawkweed",
            "scientificName": "Hieracium aurantiacum",
            "family": "Asteraceae",
            "description": "Also known as 'Devil's Paintbrush,' this plant is recognized by its vibrant orange-red, dandelion-like flowers. It spreads aggressively.",
            "funFact": "Ancient folklore claimed that hawks ate this plant to improve their eyesight, which is how it earned the name 'Hawkweed'."
          },
          "jatropha": {
            "name": "Buddha Belly Plant",
            "scientificName": "Jatropha podagrica",
            "family": "Euphorbiaceae",
            "description": "A unique succulent grown for its swollen, bottle-like stem and large, lobed leaves. It produces clusters of small, coral-red flowers.",
            "funFact": "In some cultures, it's known as the 'Gout Plant' because its swollen stem resembles a gout-swollen foot."
          },
          "lepidium": {
            "name": "Garden Cress",
            "scientificName": "Lepidium sativum",
            "family": "Brassicaceae",
            "description": "A fast-growing edible herb with a peppery, tangy flavor and aroma. It's often cultivated for its sprouts, which are used in salads and sandwiches.",
            "funFact": "Garden cress is so fast-growing that it's often used in elementary school science classes to demonstrate plant germination."
          },
          "lupinus": {
            "name": "Bigleaf Lupine",
            "scientificName": "Lupinus polyphyllus",
            "family": "Fabaceae",
            "description": "Famous for its tall, showy spikes of pea-like flowers, which come in a variety of colors. Often seen in large roadside colonies.",
            "funFact": "The seeds of many lupine species are toxic, but some varieties, known as 'sweet lupins,' have been bred to have edible seeds that are a popular snack in Mediterranean countries."
          },
          "penstemon": {
            "name": "Palmer's Penstemon",
            "scientificName": "Penstemon palmeri",
            "family": "Plantaginaceae",
            "description": "A tall, striking wildflower of the desert southwest, known for its large, fragrant, pink to lavender tubular flowers that attract hummingbirds and bees.",
            "funFact": "Its common name, 'Beardtongue,' comes from a sterile, often hairy stamen that protrudes from the flower's 'mouth'."
          },
          "plantago": {
            "name": "Broadleaf Plantain",
            "scientificName": "Plantago major",
            "family": "Plantaginaceae",
            "description": "A common and resilient 'weed' found in lawns and disturbed soils worldwide. It forms a rosette of leaves and sends up dense spikes of tiny flowers.",
            "funFact": "This plant was carried to North America by European colonists, and Native Americans called it 'White Man's Footprint' because it seemed to spring up wherever they settled."
          },
          "potentilla": {
            "name": "Shrubby Cinquefoil",
            "scientificName": "Potentilla fruticosa",
            "family": "Rosaceae",
            "description": "A hardy, deciduous shrub with a very long blooming season. It produces abundant, saucer-shaped yellow flowers and is a popular landscape plant.",
            "funFact": "The name 'Cinquefoil' means 'five leaves,' referring to the five leaflets that make up its compound leaves."
          },
          "prunusCherry": {
            "name": "Sweet Cherry",
            "scientificName": "Prunus avium",
            "family": "Rosaceae",
            "description": "A beloved tree, famous for its beautiful clusters of white spring blossoms and its delicious, fleshy red to black fruit.",
            "funFact": "The world record for spitting a cherry pit is over 93 feet (28.5 meters)!"
          },
          "prunusAlmond": {
            "name": "Almond",
            "scientificName": "Prunus dulcis",
            "family": "Rosaceae",
            "description": "A tree highly valued for its edible nuts. It is one of the earliest blooming fruit trees, producing fragrant pale pink to white flowers.",
            "funFact": "Almonds are not true nuts; they are 'drupes,' a type of fruit with an outer fleshy part surrounding a shell with a seed inside. Peaches are a close relative."
          },
          "ranunculus": {
            "name": "Meadow Buttercup",
            "scientificName": "Ranunculus acris",
            "family": "Ranunculaceae",
            "description": "The classic buttercup of fields and meadows, recognized by its glossy yellow petals that have a waxy sheen.",
            "funFact": "The glossy sheen on buttercup petals is due to a special layer of cells that reflects light, which helps attract pollinators."
          },
          "rosa": {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "family": "Rosaceae",
            "description": "A vigorous, climbing wild rose species native to Europe. It has arching, thorny stems and produces simple, fragrant flowers followed by red-orange hips.",
            "funFact": "The rose hips of this plant are exceptionally rich in Vitamin C and were used to make a syrup for children in Britain during World War II."
          },
          "rubus": {
            "name": "Common Blackberry",
            "scientificName": "Rubus fruticosus",
            "family": "Rosaceae",
            "description": "A widespread, thorny shrub that forms dense thickets known as brambles. It produces white or pinkish flowers that develop into the well-known dark purple, edible fruit.",
            "funFact": "A single blackberry is not one fruit, but an 'aggregate fruit' made up of many tiny individual fruits called drupelets."
          },
          "salvia": {
            "name": "Common Sage",
            "scientificName": "Salvia officinalis",
            "family": "Lamiaceae",
            "description": "A perennial, evergreen subshrub prized for its grayish, aromatic leaves used in cooking. It produces spikes of bluish-purple flowers.",
            "funFact": "The genus name 'Salvia' comes from the Latin word 'salvere,' meaning 'to feel well and healthy,' referring to its long history of medicinal use."
          },
          "senecio": {
            "name": "Common Groundsel",
            "scientificName": "Senecio vulgaris",
            "family": "Asteraceae",
            "description": "A very common and fast-growing annual weed. It can complete its life cycle in a matter of weeks, producing small, yellow, cylindrical flower heads.",
            "funFact": "This plant can produce over 1,000 seeds and have up to three generations in a single year, making it an incredibly successful weed."
          },
          "silene": {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "family": "Caryophyllaceae",
            "description": "A common wildflower of woodlands and hedgerows, featuring bright pink to red flowers with five notched petals. Male and female flowers grow on separate plants.",
            "funFact": "Scientists successfully regenerated a 32,000-year-old Silene plant from fruit tissue found buried in Siberian permafrost."
          },
          "solidago": {
            "name": "Canada Goldenrod",
            "scientificName": "Solidago canadensis",
            "family": "Asteraceae",
            "description": "A tall, perennial wildflower known for its large, plume-like clusters of tiny, bright yellow flowers in late summer.",
            "funFact": "Goldenrod is often unfairly blamed for hay fever, but its pollen is heavy and sticky, designed for insect pollination, not wind. The real culprit is usually Ragweed, which blooms at the same time."
          },
          "stachys": {
            "name": "Lamb's Ear",
            "scientificName": "Stachys byzantina",
            "family": "Lamiaceae",
            "description": "Grown primarily for its thick, soft, fuzzy silver-gray leaves that have a texture like a lamb's ear. It occasionally sends up spikes of small, purple flowers.",
            "funFact": "Because of their softness and absorbent properties, the leaves of Lamb's Ear have been used historically as battlefield wound dressings."
          },
          "stellaria": {
            "name": "Common Chickweed",
            "scientificName": "Stellaria media",
            "family": "Caryophyllaceae",
            "description": "A low-growing, widespread annual weed found in cool, moist areas. It has small, star-shaped white flowers whose five petals are so deeply cleft they appear to be ten.",
            "funFact": "As its name suggests, Chickweed is an edible and nutritious plant that is a favorite food for chickens and other birds."
          },
          "symphyotrichum": {
            "name": "New England Aster",
            "scientificName": "Symphyotrichum novae-angliae",
            "family": "Asteraceae",
            "description": "A vibrant, late-season perennial that produces a profusion of daisy-like flowers with purple to pink rays and a golden-yellow central disc. A butterfly magnet.",
            "funFact": "This aster is a crucial late-season food source for monarch butterflies as they migrate to Mexico for the winter."
          },
          "thalictrum": {
            "name": "Columbine Meadow-rue",
            "scientificName": "Thalictrum aquilegiifolium",
            "family": "Ranunculaceae",
            "description": "A tall, elegant perennial with delicate, fern-like foliage similar to a Columbine. It produces large, fluffy clusters of lilac-pink flowers.",
            "funFact": "The flowers have no petals; their fluffy appearance comes from a dense cluster of long, colorful stamens."
          },
          "trifolium": {
            "name": "Red Clover",
            "scientificName": "Trifolium pratense",
            "family": "Fabaceae",
            "description": "A familiar wildflower of grassy areas, easily identified by its trifoliate leaves and dense, globular heads of pinkish-purple flowers.",
            "funFact": "Clovers improve soil health through nitrogen fixation, a process where they convert atmospheric nitrogen into a form that other plants can use."
          },
          "veronica": {
            "name": "Germander Speedwell",
            "scientificName": "Veronica chamaedrys",
            "family": "Plantaginaceae",
            "description": "A low-growing perennial that forms attractive patches in grasslands and lawns. It is noted for its small but brilliant blue flowers, each with a distinctive white eye.",
            "funFact": "In old folklore, this flower was sometimes called 'Bird's Eye,' and it was believed that if you picked it, birds would come and peck out your eyes."
          },
          "vicia": {
            "name": "Cow Vetch",
            "scientificName": "Vicia cracca",
            "family": "Fabaceae",
            "description": "A sprawling, climbing perennial that uses tendrils to support itself on other plants. It produces dense, one-sided clusters of small, purple-blue, pea-like flowers.",
            "funFact": "Like clover, vetch is a nitrogen-fixing legume, often planted as a 'cover crop' by farmers to enrich the soil naturally between growing seasons."
          }
        }
      }
    }
  },
  es: {
    translation: {
      "hero": {
        "badge": "NASA Space Apps Challenge 2025",
        "title": "Observa el pulso de vida de nuestro planeta",
        "titleHighlight": "pulso de vida",
        "subtitle": "Transformamos datos satelitales en una herramienta estratégica para agricultura inteligente y conservación ambiental",
        "cta1": "Ver la Aplicación",
        "cta2": "Conocer Más",
        "stats": {
          "efficiency": "Precisión de datos anual",
          "monitoring": "Monitoreo Global", 
          "prediction": "Predicción",
          "droughtPrediction": "Sequias y cambio climático"
        }
      },
      "problemSolution": {
        "problem": {
          "badge": "El Desafío",
          "title": "La vegetación está cambiando",
          "points": {
            "climate": "El cambio climático altera los patrones de floración natural",
            "data": "Los agricultores carecen de datos precisos para optimizar recursos",
            "policies": "Las políticas ambientales necesitan información en tiempo real",
            "biodiversity": "Pérdida de biodiversidad sin sistemas de monitoreo efectivos"
          }
        },
        "solution": {
          "badge": "Nuestra Solución",
          "title": "BLOOMBLY: Inteligencia desde el espacio",
          "points": {
            "monitoring": "Monitoreo en tiempo real de eventos de floración global",
            "prediction": "Predicción de floración por región usando ML y datos NASA",
            "reports": "Reportes de análisis de suelo y condiciones de clima por región y tipo de planta",
            "data": "Datos accionables para agricultura, conservación y políticas públicas"
          }
        }
      },
      "impact": {
        "title": "¿Cómo nuestro modelo ayuda en ",
        "titleHighlight": "el mundo real?",
        "subtitle": "Transformamos la observación satelital en soluciones concretas.",
        "agriculture": {
          "title": "Agricultura Inteligente",
          "description": "Optimización de recursos y aumento de productividad",
          "benefits": {
            "prediction": "Predicción precisa de floración por región",
            "optimization": "Optimización de riego y fertilización",
            "management": "Gestión estratégica de polinizadores",
            "reduction": "Reducción de costos operativos hasta 40%"
          }
        },
        "biodiversity": {
          "title": "Biodiversidad & Clima",
          "description": "Monitoreo ambiental para políticas basadas en datos",
          "benefits": {
            "detection": "Detección temprana de estrés ambiental",
            "policies": "Datos para políticas públicas efectivas",
            "prioritization": "Priorización de recursos en zonas críticas",
            "tracking": "Seguimiento de especies invasoras"
          }
        }
      },
      "features": {
        "title": "¿Cómo lo ",
        "titleHighlight": "hacemos?",
        "subtitle": "Combinamos lo mejor de la observación espacial con inteligencia artificial avanzada",
        "exploreButton": "Explorar Especies de Plantas",
        "items": {
          "precise": {
            "title": "Datos Precisos",
            "description": "Acceso directo a observaciones satelitales."
          },
          "ml": {
            "title": "Machine Learning",
            "description": "Modelos predictivos entrenados con datos históricos y climáticos"
          },
          "global": {
            "title": "Cobertura Global",
            "description": "Monitoreo desde escala local hasta cobertura planetaria completa"
          },
          "realtime": {
            "title": "Tiempo Real",
            "description": "Actualizaciones continuas para decisiones oportunas"
          }
        }
      },
      "useCases": {
        "title": "¿Dónde es ",
        "titleHighlight": "útil",
        "titleEnd": "?",
        "subtitle": "Soluciones adaptadas para cada sector del ecosistema agrícola y ambiental",
        "sectors": {
          "environmental": {
            "sector": "Organizaciones Ambientales",
            "title": "Conservación Inteligente",
            "description": "Rastrea cambios en patrones de floración para identificar impactos del cambio climático y gestionar la biodiversidad proactivamente.",
            "stats": "Tiempo real"
          },
          "private": {
            "sector": "Sector Privado",
            "title": "Planificación Estratégica",
            "description": "Las empresas agrícolas y alimentarias pueden usar nuestro modelo para generar resúmenes y desarrollar planes estratégicos para exportaciones, certificaciones sostenibles y mejora logística.",
            "stats": "Eficiencia Operativa"
          },
          "government": {
            "sector": "Gobiernos",
            "title": "Políticas Basadas en Datos",
            "description": "Monitoreo automático del territorio nacional. Detecta zonas de estrés climático, prioriza recursos y diseña políticas ambientales efectivas.",
            "stats": "Escala nacional"
          },
          "farmers": {
            "sector": "Agricultores",
            "title": "Maximiza tu Cosecha",
            "description": "Optimiza riego, fertilización y manejo de colmenas con datos constantemente actualizados para aumentar rendimiento y reducir costos.",
            "stats": "98.6% de precisión en datos"
          }
        }
      },
      "cta": {
        "title": "Transforma datos satelitales en ",
        "titleHighlight": "decisiones estratégicas",
        "description": "La revolución del monitoreo de vegetación. Produce más, conserva mejor y responde antes a los cambios del planeta.",
        "button1": "Explorar BLOOMBLY",
        "button2": "Conocer Más"
      },
      "footer": {
        "tagline": "Built with Machine Learning",
        "links": {
          "about": "Acerca de",
          "technology": "Tecnología",
          "useCases": "Casos de Uso",
          "contact": "Contacto"
        },
        "copyright": "© 2025 BLOOMBLY",
        "challenge": "NASA Space Apps Challenge"
      },
      "language": {
        "spanish": "Español",
        "english": "English"
      },
      "plantsGallery": {
        "badge": "Galería de Especies",
        "title": "Descubre Nuestras",
        "titleHighlight": "33 Especies",
        "subtitle": "Explora la diversidad de plantas monitoreadas por nuestra plataforma de inteligencia artificial",
        "family": "Familia:",
        "funFact": "¿Sabías que?",
        "plants": {
          "astragalus": {
            "name": "Astrágalo Alpino",
            "scientificName": "Astragalus alpinus",
            "family": "Fabaceae",
            "description": "Una planta perenne rastrera de la familia de las leguminosas, común en regiones alpinas o árticas. Forma alfombras y produce racimos de flores púrpura a lila.",
            "funFact": "Algunas especies de Astragalus son conocidas como 'hierba loca' porque pueden ser tóxicas para el ganado, causando efectos neurológicos extraños."
          },
          "cardamine": {
            "name": "Berro de Prado",
            "scientificName": "Cardamine pratensis",
            "family": "Brassicaceae",
            "description": "Una planta herbácea perenne conocida por sus delicadas flores rosa pálido o blancas que aparecen en primavera. Crece comúnmente en praderas y pastizales húmedos.",
            "funFact": "Su nombre viene de la creencia de que florece cuando el cuco comienza a cantar en primavera."
          },
          "cerastium": {
            "name": "Nieve de Verano",
            "scientificName": "Cerastium tomentosum",
            "family": "Caryophyllaceae",
            "description": "Una popular planta tapizante apreciada por su follaje gris plateado y una profusión de flores blancas estrelladas que crean un efecto similar a la nieve.",
            "funFact": "Esta planta es extremadamente tolerante a la sequía y prospera en suelos pobres y rocosos donde muchas otras plantas no sobrevivirían."
          },
          "chrysanthemum": {
            "name": "Crisantemo",
            "scientificName": "Chrysanthemum morifolium",
            "family": "Asteraceae",
            "description": "Un clásico favorito de los jardines, cultivado durante miles de años. Produce una amplia variedad de cabezas florales coloridas y complejas, típicamente floreciendo en otoño.",
            "funFact": "En Japón, el Crisantemo es un símbolo del Emperador y la familia Imperial, y el 'Trono del Crisantemo' es el nombre dado a la posición del Emperador."
          },
          "crotalaria": {
            "name": "Flor Pájaro Verde",
            "scientificName": "Crotalaria cunninghamii",
            "family": "Fabaceae",
            "description": "Una extraordinaria planta de Australia conocida por sus flores verdes que tienen un sorprendente parecido con un colibrí alimentándose del tallo.",
            "funFact": "La forma única de la flor similar a un pájaro es un ejemplo ingenioso de mimetismo, aunque sigue siendo polinizada por pájaros y abejas."
          },
          "delphinium": {
            "name": "Espuela de Caballero",
            "scientificName": "Delphinium elatum",
            "family": "Ranunculaceae",
            "description": "Conocida por sus altas y dramáticas espiras de flores densamente agrupadas, típicamente en tonos azules. Una planta clásica de jardín, pero todas sus partes son tóxicas.",
            "funFact": "El nombre 'Delphinium' viene de la palabra griega antigua para delfín, ya que la forma del nectario se pensaba que se parecía a un delfín."
          },
          "draba": {
            "name": "Hierba de Primavera",
            "scientificName": "Draba verna",
            "family": "Brassicaceae",
            "description": "Una pequeña planta anual de floración temprana que es a menudo una de las primeras señales de primavera. Forma una pequeña roseta y produce delicadas flores blancas de cuatro pétalos.",
            "funFact": "Esta diminuta planta puede completar todo su ciclo de vida, desde la germinación hasta la producción de semillas, en tan solo un mes."
          },
          "erigeron": {
            "name": "Margarita de Mar",
            "scientificName": "Erigeron glaucus",
            "family": "Asteraceae",
            "description": "Una resistente planta perenne tolerante a la sal, nativa de las costas. Forma un montículo bajo de hojas azul-verdosas y produce alegres flores similares a margaritas de color lavanda.",
            "funFact": "Su nombre de género 'Erigeron' significa 'viejo temprano' en griego, refiriéndose al hecho de que muchas especies florecen temprano y tienen semillas blancas y peludas que se asemejan a la barba de un anciano."
          },
          "euphorbia": {
            "name": "Corona de Cristo",
            "scientificName": "Euphorbia milii",
            "family": "Euphorbiaceae",
            "description": "Un arbusto suculento conocido por sus densas espinas afiladas y brácteas de colores brillantes que rodean pequeñas flores. Contiene una savia blanca lechosa que es irritante.",
            "funFact": "La leyenda dice que esta especie fue la planta utilizada para crear la corona de espinas colocada en la cabeza de Jesús antes de la crucifixión."
          },
          "helichrysum": {
            "name": "Planta del Curry",
            "scientificName": "Helichrysum italicum",
            "family": "Asteraceae",
            "description": "Un pequeño arbusto con follaje plateado que libera un fuerte aroma similar al curry. Produce racimos de pequeñas flores amarillas similares a la paja.",
            "funFact": "A pesar de su fuerte aroma a curry, no se usa para cocinar. El aroma se libera cuando las hojas son magulladas o calentadas por el sol."
          },
          "hieracium": {
            "name": "Pelosilla Anaranjada",
            "scientificName": "Hieracium aurantiacum",
            "family": "Asteraceae",
            "description": "También conocida como 'Pincel del Diablo', esta planta se reconoce por sus vibrantes flores naranja-rojizas similares al diente de león. Se propaga agresivamente.",
            "funFact": "El folklore antiguo afirmaba que los halcones comían esta planta para mejorar su vista, de ahí el nombre 'Hierba del Halcón'."
          },
          "jatropha": {
            "name": "Planta Vientre de Buda",
            "scientificName": "Jatropha podagrica",
            "family": "Euphorbiaceae",
            "description": "Una suculenta única cultivada por su tallo hinchado similar a una botella y grandes hojas lobuladas. Produce racimos de pequeñas flores rojo coral.",
            "funFact": "En algunas culturas, se conoce como la 'Planta de la Gota' porque su tallo hinchado se parece a un pie hinchado por la gota."
          },
          "lepidium": {
            "name": "Berro de Jardín",
            "scientificName": "Lepidium sativum",
            "family": "Brassicaceae",
            "description": "Una hierba comestible de rápido crecimiento con sabor y aroma picante y ácido. A menudo se cultiva por sus brotes, que se usan en ensaladas y sándwiches.",
            "funFact": "El berro de jardín crece tan rápido que a menudo se usa en clases de ciencias de primaria para demostrar la germinación de las plantas."
          },
          "lupinus": {
            "name": "Lupino de Hoja Grande",
            "scientificName": "Lupinus polyphyllus",
            "family": "Fabaceae",
            "description": "Famoso por sus altas y vistosas espigas de flores similares a los guisantes, que vienen en una variedad de colores. A menudo se ve en grandes colonias al lado de las carreteras.",
            "funFact": "Las semillas de muchas especies de lupino son tóxicas, pero algunas variedades, conocidas como 'lupinos dulces', han sido criadas para tener semillas comestibles que son un aperitivo popular en países mediterráneos."
          },
          "penstemon": {
            "name": "Penstemon de Palmer",
            "scientificName": "Penstemon palmeri",
            "family": "Plantaginaceae",
            "description": "Una alta y llamativa flor silvestre del suroeste desértico, conocida por sus grandes flores tubulares fragantes de color rosa a lavanda que atraen a colibríes y abejas.",
            "funFact": "Su nombre común, 'Lengua de Barba', viene de un estambre estéril, a menudo peludo, que sobresale de la 'boca' de la flor."
          },
          "plantago": {
            "name": "Llantén Mayor",
            "scientificName": "Plantago major",
            "family": "Plantaginaceae",
            "description": "Una 'maleza' común y resistente que se encuentra en céspedes y suelos perturbados en todo el mundo. Forma una roseta de hojas y envía densas espigas de pequeñas flores.",
            "funFact": "Esta planta fue llevada a América del Norte por los colonos europeos, y los nativos americanos la llamaban 'Huella del Hombre Blanco' porque parecía brotar dondequiera que se asentaban."
          },
          "potentilla": {
            "name": "Cincoenrama Arbustiva",
            "scientificName": "Potentilla fruticosa",
            "family": "Rosaceae",
            "description": "Un arbusto caducifolio resistente con una temporada de floración muy larga. Produce abundantes flores amarillas en forma de platillo y es una planta popular en paisajismo.",
            "funFact": "El nombre 'Cincoenrama' significa 'cinco hojas', refiriéndose a los cinco folíolos que componen sus hojas compuestas."
          },
          "prunusCherry": {
            "name": "Cerezo Dulce",
            "scientificName": "Prunus avium",
            "family": "Rosaceae",
            "description": "Un árbol adorado, famoso por sus hermosos racimos de flores blancas primaverales y su deliciosa fruta carnosa de roja a negra.",
            "funFact": "¡El récord mundial de escupir un hueso de cereza es de más de 28.5 metros!"
          },
          "prunusAlmond": {
            "name": "Almendro",
            "scientificName": "Prunus dulcis",
            "family": "Rosaceae",
            "description": "Un árbol muy valorado por sus frutos secos comestibles. Es uno de los árboles frutales de floración más temprana, produciendo flores fragantes de color rosa pálido a blanco.",
            "funFact": "Las almendras no son frutos secos verdaderos; son 'drupas', un tipo de fruta con una parte exterior carnosa que rodea una cáscara con una semilla dentro. Los melocotones son parientes cercanos."
          },
          "ranunculus": {
            "name": "Botón de Oro",
            "scientificName": "Ranunculus acris",
            "family": "Ranunculaceae",
            "description": "El clásico botón de oro de campos y praderas, reconocido por sus pétalos amarillos brillantes que tienen un brillo ceroso.",
            "funFact": "El brillo en los pétalos del botón de oro se debe a una capa especial de células que refleja la luz, lo que ayuda a atraer polinizadores."
          },
          "rosa": {
            "name": "Rosa Silvestre",
            "scientificName": "Rosa canina",
            "family": "Rosaceae",
            "description": "Una especie de rosa silvestre vigorosa y trepadora nativa de Europa. Tiene tallos arqueados y espinosos y produce flores simples y fragantes seguidas de escaramujos rojo-anaranjados.",
            "funFact": "Los escaramujos de esta planta son excepcionalmente ricos en Vitamina C y se usaban para hacer jarabe para niños en Gran Bretaña durante la Segunda Guerra Mundial."
          },
          "rubus": {
            "name": "Zarzamora Común",
            "scientificName": "Rubus fruticosus",
            "family": "Rosaceae",
            "description": "Un arbusto espinoso extendido que forma densos matorrales conocidos como zarzales. Produce flores blancas o rosadas que se desarrollan en la conocida fruta comestible de color púrpura oscuro.",
            "funFact": "Una sola mora no es una fruta, sino una 'fruta agregada' compuesta por muchas pequeñas frutas individuales llamadas drupéolas."
          },
          "salvia": {
            "name": "Salvia Común",
            "scientificName": "Salvia officinalis",
            "family": "Lamiaceae",
            "description": "Un subarbusto perenne y siempreverde apreciado por sus hojas aromáticas grisáceas utilizadas en la cocina. Produce espigas de flores azul-púrpura.",
            "funFact": "El nombre del género 'Salvia' viene de la palabra latina 'salvere', que significa 'sentirse bien y saludable', refiriéndose a su larga historia de uso medicinal."
          },
          "senecio": {
            "name": "Hierba Cana",
            "scientificName": "Senecio vulgaris",
            "family": "Asteraceae",
            "description": "Una maleza anual muy común y de rápido crecimiento. Puede completar su ciclo de vida en cuestión de semanas, produciendo pequeñas cabezas florales cilíndricas amarillas.",
            "funFact": "Esta planta puede producir más de 1,000 semillas y tener hasta tres generaciones en un solo año, lo que la convierte en una maleza increíblemente exitosa."
          },
          "silene": {
            "name": "Campión Rojo",
            "scientificName": "Silene dioica",
            "family": "Caryophyllaceae",
            "description": "Una flor silvestre común de bosques y setos, con flores rosa brillante a rojo con cinco pétalos dentados. Las flores masculinas y femeninas crecen en plantas separadas.",
            "funFact": "Los científicos lograron regenerar con éxito una planta Silene de 32,000 años de antigüedad a partir de tejido de fruta encontrado enterrado en el permafrost siberiano."
          },
          "solidago": {
            "name": "Vara de Oro Canadiense",
            "scientificName": "Solidago canadensis",
            "family": "Asteraceae",
            "description": "Una flor silvestre perenne alta conocida por sus grandes racimos en forma de pluma de pequeñas flores amarillas brillantes a finales del verano.",
            "funFact": "La vara de oro a menudo es culpada injustamente por la fiebre del heno, pero su polen es pesado y pegajoso, diseñado para la polinización por insectos, no por el viento. El verdadero culpable suele ser la Ambrosía, que florece al mismo tiempo."
          },
          "stachys": {
            "name": "Oreja de Cordero",
            "scientificName": "Stachys byzantina",
            "family": "Lamiaceae",
            "description": "Cultivada principalmente por sus hojas gruesas, suaves y peludas de color gris plateado que tienen una textura como la oreja de un cordero. Ocasionalmente envía espigas de pequeñas flores púrpuras.",
            "funFact": "Debido a su suavidad y propiedades absorbentes, las hojas de la Oreja de Cordero se han utilizado históricamente como vendajes para heridas en campos de batalla."
          },
          "stellaria": {
            "name": "Pamplina",
            "scientificName": "Stellaria media",
            "family": "Caryophyllaceae",
            "description": "Una maleza anual de bajo crecimiento y extendida que se encuentra en áreas frescas y húmedas. Tiene pequeñas flores blancas en forma de estrella cuyos cinco pétalos están tan profundamente hendidos que parecen ser diez.",
            "funFact": "Como sugiere su nombre, la Pamplina es una planta comestible y nutritiva que es un alimento favorito para los pollos y otras aves."
          },
          "symphyotrichum": {
            "name": "Aster de Nueva Inglaterra",
            "scientificName": "Symphyotrichum novae-angliae",
            "family": "Asteraceae",
            "description": "Una perenne vibrante de final de temporada que produce una profusión de flores similares a margaritas con rayos púrpura a rosa y un disco central dorado-amarillo. Un imán para mariposas.",
            "funFact": "Este áster es una fuente crucial de alimento a final de temporada para las mariposas monarca mientras migran a México para el invierno."
          },
          "thalictrum": {
            "name": "Talictro Colombino",
            "scientificName": "Thalictrum aquilegiifolium",
            "family": "Ranunculaceae",
            "description": "Una perenne alta y elegante con follaje delicado similar a un helecho parecido al de la Aquilegia. Produce grandes racimos esponjosos de flores rosa-lila.",
            "funFact": "Las flores no tienen pétalos; su apariencia esponjosa proviene de un denso grupo de largos estambres coloridos."
          },
          "trifolium": {
            "name": "Trébol Rojo",
            "scientificName": "Trifolium pratense",
            "family": "Fabaceae",
            "description": "Una flor silvestre familiar de áreas herbosas, fácilmente identificable por sus hojas trifoliadas y densas cabezas globulares de flores rosa-púrpura.",
            "funFact": "Los tréboles mejoran la salud del suelo mediante la fijación de nitrógeno, un proceso donde convierten el nitrógeno atmosférico en una forma que otras plantas pueden usar."
          },
          "veronica": {
            "name": "Verónica Común",
            "scientificName": "Veronica chamaedrys",
            "family": "Plantaginaceae",
            "description": "Una perenne de bajo crecimiento que forma atractivos parches en pastizales y céspedes. Se destaca por sus pequeñas pero brillantes flores azules, cada una con un distintivo ojo blanco.",
            "funFact": "En el antiguo folclore, esta flor a veces se llamaba 'Ojo de Pájaro', y se creía que si la recogías, los pájaros vendrían a picarte los ojos."
          },
          "vicia": {
            "name": "Arveja Silvestre",
            "scientificName": "Vicia cracca",
            "family": "Fabaceae",
            "description": "Una planta perenne trepadora que utiliza zarcillos para apoyarse en otras plantas. Produce racimos densos y unilaterales de pequeñas flores azul-púrpura similares a guisantes.",
            "funFact": "Como el trébol, la vicia es una leguminosa fijadora de nitrógeno, a menudo sembrada como 'cultivo de cobertura' por los agricultores para enriquecer el suelo de forma natural entre las temporadas de cultivo."
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
