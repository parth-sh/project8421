import { Item } from "./interfaces/item";

export const ITEMS: Item[] = [
    { id: 1, image_url: "https://mediacdn.99acres.com/media1/16619/17/332397148O-1638770552756.jpg", name: "Ganpati Classique Sikandra, Agra", address: "Bhatia Compound No 2, Nr Vandhan Talkies, Opp Satkar Hotel, Lbs Amrg, Thane(w)", cost: "₹ 65 Lac" },
    { id: 2, image_url: "https://img.staticmb.com/mbimages/project/popup/2021/04/19/Project-Photo-8-Mahadev-Apartment-New-Delhi-5252211_345_1366.jpg", name: "Mahadev Apartment", address: "Sector 23 Dwarka, New Delhi", cost: "₹ 60.0 Lac - ₹ 1.20 Cr" },
    { id: 3, image_url: "https://mediacdn.99acres.com/media1/7545/17/150917203M-1575108985460.jpeg", name: "Bhuvneshvara aprtments", address: "Bangalore Kanakapura, Bangalore South", cost: "₹ 76 Lac" },
    { id: 4, image_url: "https://newprojects.99acres.com/projects/tgr_projects/tgr_ankshu_ecstasy/images/v301ts90.jpg", name: "TGR Ankshu Ecstacy", address: "1 Vindhya Commercial Comple, Sector 11, Turbhe", cost: "₹ 10.6 Crore" },
    { id: 5, image_url: "https://newprojects.99acres.com/projects/godrej_properties/godrej_royale_woods/images/459uyqb4.png", name: "Godrej Royale Woods", address: "14/15/16 A, Pravasi Indl Estate, Vishweshwar Road, Nr Aarey Milk Colony, Goregaon (e)", cost: "₹ 90 Lac" },
    { id: 6, image_url: "https://newprojects.99acres.com/projects/asn_developers/asn_gardenia/images/jl6nrhld.jpg", name: "ASN Grandenia", address: "514 Ghorpade Peth,shivaji Road, Budhwar Peth", cost: "" },
    { id: 7, image_url: "https://newprojects.99acres.com/projects/mahaveer_group_/mahaveer_ranches/images/qh2zmn42.jpg", name: "Mahverr Ranches", address: " 414 Veer Savarkar Marg, Prabhadevi", cost: "" },
    { id: 8, image_url: "https://newprojects.99acres.com/projects/mahaveer_group_/mahaveer_sitara/images/lmoza8zw.jpg", name: "Mahaveer Sitara", address: " Kruti Appt, Fatehgunj Main Road, Fatehgunj Main Road", cost: "" },
    { id: 9, image_url: "https://newprojects.99acres.com/projects/mahaveer_group/mahaveer_celesse/images/se.jpg", name: "Mahaveer Celesse", address: "Gr Floor, Johari Mansion, Kalbadevi Road, Kalbadevi", cost: "" },
    { id: 10, image_url: "https://newprojects.99acres.com/projects/mahaveer_group_/mahaveer_palatium/images/10ab69tz.png", name: "Mahaveer Platinum", address: "Shop No 12, Santushti Shopping Cmplx, Race Course Road", cost: "" },
    { id: 11, image_url: "https://newprojects.99acres.com/projects/sumadhura_group/sumadhura_eden_garden/images/j2mmeyln.jpg", name: "Sumadhra Eden Garden", address: "9/11 Shakti Sadan 4th Flr, 28, Old Hanuman Lane, Ladwadi, Kalbadevi", cost: "" },
    { id: 12, image_url: "https://newprojects.99acres.com/projects/candeur_constructions/candeur_signature/images/uufs5a61.jpg", name: "Candeur Signature", address: "", cost: "" },
    { id: 13, image_url: "https://newprojects.99acres.com/projects/casagrand/casagrand_boulevard/images/3nd4g4s5.png", name: "Casgrand Boulevard", address: "Off-9, Parvati Industrial Estate, Sun Mill Compound, Delisle Road", cost: "" },
    { id: 14, image_url: "https://newprojects.99acres.com/projects/unknown/mana_capitol/images/x5991u8x.jpg", name: "Mana Capitol", address: "111, Horaizon Tower, 1st Floor, Bakti Mandir Rd, Near Hari Niwas, Thane (west)", cost: "" },
    { id: 15, image_url: "https://newprojects.99acres.com/projects/puravankara_projects_ltd_/purva_palm_beach/images/37oj0nah.jpg", name: "Puravankara Project PVT LTD.", address: "Budh Vihar", cost: "" },
    { id: 16, image_url: "https://newprojects.99acres.com/projects/unknown/ranka_countryside/images/2zpyk7mh.jpg", name: "Ranka countryside", address: "185, Punja Sharif, Kashmere Gate", cost: "" },
    { id: 17, image_url: "https://newprojects.99acres.com/projects/ecolife_developers/ecolife_eon_akash/images/5j4qlcz7.jpg", name: "Ecolife Eon Akash", address: "F-2, Nehru Park Fountain, Vastrapur", cost: "" },
    { id: 18, image_url: "https://newprojects.99acres.com/projects/vaishnavi_group_bangalore/vaishnavi_serene/images/wln8sv2u.jpg", name: "Vaishnavi Serene", address: "2, 15/17, Raghavji Building, August Kranti Marg, Gowalia Tank, August Kranti", cost: "" },
    { id: 19, image_url: "https://newprojects.99acres.com/projects/surya_projects/surya_humming_bird/images/lzh2tike.jpg", name: "Surya humming Bird", address: "150, Shaheen Mansion, Modi Str, Fort", cost: "" },
    { id: 19, image_url: "https://newprojects.99acres.com/projects/candeur_constructions/candeur_carlisle/images/f3lvm47e.jpg", name: "Candeur Carlisle", address: "8 Dev Ashish Bldg, Off Ee Highway Over Bridge, Wagle Industrial Estate", cost: "" },
    { id: 19, image_url: "https://newprojects.99acres.com/projects/arsis_developers/arsis_green_hills/images/vuicid8k.jpg", name: "Arsis Green hills", address: "Tata Motors Ltd, Appansaheb Marathe Marg, Opp Icici Prudential, Prabhadevi", cost: "" },
]

export const RECOMMENDED_ITEMS = ITEMS.slice(0, 6)
export const FEATURED_ITEMS = ITEMS.slice(7, 16)