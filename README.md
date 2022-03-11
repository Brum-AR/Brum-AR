# Brum-ar API
### Welcome to the API for the Brum-ar IOS app and web app.

### URI : https://brum-ar-api.herokuapp.com

### Endpoints:
**GET**

    - /scooter : gives a list of scooter with only the id | name | color | saddle_color | price

    - /scooter/:id : gives the scooter number {id} with all the informations
```json   
     {
        "_id": "622ab59950f323eb24c4ae0f",
        "name": "Scooter",
        "price": 3200,
        "color": "Vert",
        "saddle_color": "Beige",
        "scooter_characteristics": {
            "max_speed": "45 Km/h",
            "cylinder": "50 cc",
            "license": "permis AM, BSR ou permis B",
            "reverse_gear": true,
            "control_screen": "écran LCD",
            "anti_theft_security": "batteries amovibles, guidon verrouillable, alarme",
            "crutch": "centrale et latérale"
        },
        "engine": {
            "type": "Bosch Brushless",
            "position": "moyeu de roue arrière",
            "power": "3000 Watts"
        },
        "battery": {
            "type": "lithium",
            "brand": "Samsung",
            "power": " 60 Volts",
            "life": "20/40 Ah",
            "max_autonomy_ECO": "45/90 km",
            "charging_time": " 4 heures 30",
            "removable": true,
            "weight": 10
        },
        "framework": {
            "dimension": "1870 mm (longueur), 1140 mm (hauteur), 700 mm (largeur)",
            "saddle_height": "740 mm",
            "scooter_weight_without_battery": "76",
            "max_weight": 155,
            "front_suspension_type": "télescopique",
            "back_suspension_type": "deux combinés amortisseurs et bras oscillant",
            "assembly": "znen"
        },
        "brake": {
            "braking_energy_recovery": "true",
            "brakes": "à disque hydraulique",
            "brakes_size": "190 mm",
            "stirrups_type": "double pistons juxtaposés"
        },
        "tire": {
            "type": "route",
            "size": "110-70-12"
        },
        "accessory": {
            "alarm_and_geotracking": "en option",
            "top_case": "en option",
            "windshield": "en option",
            "portable_key": "en option",
            "usb_port": "inclus",
            "eco_mode": "inclus"
        }
    }
```
-----------------------------------------------------------
    -/top-case : gives a list of top-case 
    -/top-case/:id : gives the top-case number {id}
```json
    {
        "_id": "622ac52300b4dbad9121dba2",
        "price": 64.9,
        "description": "Un Top Case pour le scooter."
    }
```

**POST**

    -/login : if user exist, returns
```json
    { 
        "user_id": "765R6fze23",
        "email": "root@myges.fr",
        "first_name": "brum-ar",
        "last_name": "brum-ar-api",
        "address": "242 rue du Faubourg Saint Antoine",
    }
```