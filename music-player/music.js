class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName() {
        return `${this.title}  -  ${this.singer}`;
    }
}
const musicList = [
    new Music("Aşkın Olayım", "Simge"),
    new Music("Gökyüzünü Tutamam", "Can Koç"),
    new Music("Aşk Paylaşılmaz", "Aydilge"),
    new Music("Beni Aşka İnandır", "Kolpa")
]