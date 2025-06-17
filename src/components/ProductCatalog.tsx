import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "SMIPACK FP-6000",
    type: "Термоусадочная упаковка",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
    specs: {
      Производительность: "до 600 уп/час",
      "Размер товара": "50x50x300 мм",
      "Тип пленки": "ПВД, термоусадочная",
      Энергопотребление: "12 кВт",
    },
    features: [
      "Автоматическая подача",
      "Контроль качества",
      "Интеграция с WMS",
    ],
    price: "от 2 850 000 ₽",
  },
  {
    id: 2,
    name: "SMIPACK BP-802",
    type: "Блистерная упаковка",
    image:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=400&h=300&fit=crop",
    specs: {
      Производительность: "до 800 уп/час",
      "Размер блистера": "100x150 мм",
      "Толщина пленки": "0.2-0.5 мм",
      "Точность позиционирования": "±0.1 мм",
    },
    features: [
      "Фотометки",
      "Автоматический контроль",
      "Смена форматов за 5 мин",
    ],
    price: "от 3 200 000 ₽",
  },
  {
    id: 3,
    name: "SMIPACK WB-Pro",
    type: "Специально для Wildberries",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    specs: {
      Производительность: "до 1000 уп/час",
      "Форматы WB": "Все стандартные",
      Маркировка: "Автоматическая",
      Интеграция: "API Wildberries",
    },
    features: ["Маркировка честный знак", "QR-коды", "Автоотчеты в WB"],
    price: "от 4 100 000 ₽",
  },
];

const ProductCatalog = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-industrial-dark to-industrial-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 metallic-text">
            Каталог оборудования
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Промышленные решения для автоматизации упаковки товаров
            маркетплейсов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="industrial-card group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-industrial-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Новинка
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-industrial-accent font-semibold">
                    {product.type}
                  </p>
                </div>

                <div className="tech-specs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="text-muted-foreground text-sm">
                        {key}
                      </span>
                      <span className="text-white font-semibold text-sm">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white">
                    Ключевые особенности:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-industrial-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-industrial-light/20">
                  <div className="text-2xl font-bold text-industrial-accent">
                    {product.price}
                  </div>
                  <button className="industrial-btn text-sm">Подробнее</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="industrial-btn text-lg flex items-center gap-3 mx-auto">
            <Icon name="Download" size={24} />
            Скачать полный каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
