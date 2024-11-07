const thumbnail: { [key: string]: string[] } = {
    'OTKP': [
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531330758862-18KO7NPDZYIC6E3BLVCR/film+cars-16.jpg',
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531330779597-SEZ94IX0400JT6HOPQK9/film+cars-17.jpg',
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531330687550-MWPXDZO0FKXS3SZUQ069/film+cars-5.jpg',
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531331129518-KDI2F9UR8I3GBBKIS7CO/film+cars-25.jpg',
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531330671716-D21Z2H30U3STVE9B9HO8/film+cars-3.jpg',
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531330695708-5H4NTC4MXF5K83AMUH6X/film+cars-7.jpg',
        'https://images.squarespace-cdn.com/content/v1/589cc93debbd1a9c437a42de/1531331079183-F57W49HGD7O7YWFLHW92/film+cars-24.jpg'
    ],
    'AKL': [
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/Anna-Ivanova-Beetroot-soup-with-mint-chia-flax-pumpkin-seeds.jpg',
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/Alena-Gusakova-Pumpkin-Soup.jpg',
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/twiggstudios-BUuOd_9gKRr-819x1024.jpg',
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/gatherandfeast-BPgkrSzAkDJ-820x1024.jpg',
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/bealubas-BWhJgV-lAu8-820x1024.jpg',
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/careynotcarrie-BSMQOG1B54f-819x1024.jpg',
        'https://www.injohnnyskitchen.com/wp-content/uploads/2017/07/pantryno7-BQyd28-F1k0-819x1024.jpg'
    ],
    'TKJ': [
        'https://images.pexels.com/photos/5408005/pexels-photo-5408005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/12266915/pexels-photo-12266915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg',
        'https://images.pexels.com/photos/5087172/pexels-photo-5087172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/12266914/pexels-photo-12266914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/13584189/pexels-photo-13584189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'DKV': [
        'https://images.unsplash.com/photo-1611842642932-fbec0d723eb2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9sZGluZyUyMGNhbWVyYXxlbnwwfHwwfHx8MA==',
        'https://i.pinimg.com/736x/94/6f/d2/946fd20c35c6a575fdbc8a836627abd9.jpg',
        'https://images.pexels.com/photos/13672870/pexels-photo-13672870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://dslrcameraa.com/wp-content/uploads/2023/11/cropped-best-camera-for-photography-and-video-cheap-scaled-1.webp',
        'https://images.unsplash.com/photo-1611348815544-7f35deb6d15b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpZGVvJTIwY2FtZXJhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1604005405462-c3604a3fe5b8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1486693420891-65cc1fd9994c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvfGVufDB8fDB8fHww'
    ],
    'RPL': [
        'https://images.unsplash.com/photo-1618477388954-7852f32655ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1557853197-aefb550b6fdc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
}

export default thumbnail