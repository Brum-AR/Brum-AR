export function getImg(color) {
    switch (color.toLowerCase()) {
        case 'beige': return 'images/scooter1.png';
        case 'bleu': return 'images/scooter2.png';
        case 'vert': return 'images/scooter3.png';
        case 'gris': return 'images/scooter4.png';
    }

    throw new Error("color not implement yet");
}