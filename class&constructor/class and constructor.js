class Goods {
    constructor(id, name, section, type) {
        this.id = id;
        this.name = name;
        this.section = section;
        this.type = type;
    }

    addId() {
        console.log('Этот товар с id = ' + this.id + 
        ' и с названием ' + this.name + ' будет зачислен в БД');
    }

    sortBySection() {
        console.log('Товар относиться в секцию ' + this.section);
    }

    sortByType() {
        console.log('Тип товара ' + this.type);
    }
}

let DomPerinyon = new Goods(143, 'Дом-периньон', 'Алкоголь', 'Вино'),
    Hennessy = new Goods(156, 'Hennessy', 'Алкоголь', 'Коньяк');

    DomPerinyon.addId();
    DomPerinyon.sortByType();
    Hennessy.addId();
    Hennessy.sortBySection();