import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
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
          "efficiency": "Eficiencia en Riego",
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
            "description": "Empresas agrícolas y alimentarias pueden planificar exportaciones, obtener certificaciones sostenibles y mejorar logística con datos precisos.",
            "stats": "ROI medible"
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
            "description": "Optimiza riego, fertilización y movimiento de colmenas para aumentar rendimiento y reducir costos.",
            "stats": "↑40% eficiencia"
          }
        }
      },
      "cta": {
        "title": "Transforma datos satelitales en ",
        "titleHighlight": "decisiones estratégicas",
        "description": "La revolución del monitoreo de vegetación. Produce más, conserva mejor y responde antes a los cambios del planeta.",
        "button1": "Explorar BLOOMBLY",
        "button2": "Saber Más"
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
        "subtitle": "Explora la diversidad de plantas que monitorea nuestra plataforma de inteligencia artificial",
        "family": "Familia:",
        "funFact": "Dato curioso:",
        "plants": {
          "rosa": {
            "name": "Rosa",
            "scientificName": "Rosa spp.",
            "family": "Rosaceae",
            "description": "Las rosas son símbolos universales de belleza y amor, con más de 300 especies conocidas.",
            "funFact": "Las rosas pueden vivir más de 100 años."
          },
          "lavanda": {
            "name": "Lavanda",
            "scientificName": "Lavandula angustifolia",
            "family": "Lamiaceae",
            "description": "Planta aromática conocida por sus propiedades relajantes y su distintivo aroma.",
            "funFact": "La lavanda se utiliza en aromaterapia por sus propiedades relajantes."
          },
          "girasol": {
            "name": "Girasol",
            "scientificName": "Helianthus annuus",
            "family": "Asteraceae",
            "description": "Planta icónica que sigue al sol durante el día, símbolo de lealtad y devoción.",
            "funFact": "Los girasoles siguen la luz del sol durante el día."
          }
        }
      }
    }
  },
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
          "efficiency": "Irrigation Efficiency",
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
            "data": "Actionable data for agriculture, conservation and public policies"
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
            "optimization": "Irrigation and fertilization optimization",
            "management": "Strategic pollinator management",
            "reduction": "Operational cost reduction up to 40%"
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
            "description": "Agricultural and food companies can plan exports, obtain sustainable certifications and improve logistics with accurate data.",
            "stats": "Measurable ROI"
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
            "description": "Optimize irrigation, fertilization and hive movement to increase yield and reduce costs.",
            "stats": "↑40% efficiency"
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
          "rosa": {
            "name": "Rose",
            "scientificName": "Rosa spp.",
            "family": "Rosaceae",
            "description": "Roses are universal symbols of beauty and love, with more than 300 known species.",
            "funFact": "Roses can live for more than 100 years."
          },
          "lavanda": {
            "name": "Lavender",
            "scientificName": "Lavandula angustifolia",
            "family": "Lamiaceae",
            "description": "Aromatic plant known for its relaxing properties and distinctive aroma.",
            "funFact": "Lavender is used in aromatherapy for its relaxing properties."
          },
          "girasol": {
            "name": "Sunflower",
            "scientificName": "Helianthus annuus",
            "family": "Asteraceae",
            "description": "Iconic plant that follows the sun during the day, symbol of loyalty and devotion.",
            "funFact": "Sunflowers follow sunlight during the day."
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
