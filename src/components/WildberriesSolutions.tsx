import Icon from "@/components/ui/icon";

const WildberriesSolutions = () => {
  const solutions = [
    {
      title: "Быстрая упаковка",
      description:
        "Обработка до 1000 заказов в час с соблюдением требований WB",
      icon: "Zap",
      metrics: ["500+ заказов/час", "99.9% точность", "Без брака"],
    },
    {
      title: "Маркировка честный знак",
      description:
        "Автоматическое нанесение кодов маркировки согласно требованиям",
      icon: "QrCode",
      metrics: ["100% соответствие", "API интеграция", "Автоотчеты"],
    },
    {
      title: "Контроль качества",
      description:
        "Проверка комплектности и качества перед отправкой покупателю",
      icon: "Shield",
      metrics: ["0% возвратов", "Фотофиксация", "ИИ-контроль"],
    },
  ];

  const wbRequirements = [
    "Упаковка в пленку или короба",
    "Обязательная маркировка товаров",
    "QR-коды для идентификации",
    "Соблюдение габаритов отправлений",
    "Защита от повреждений при транспортировке",
    "Быстрая обработка возвратов",
  ];

  return (
    <section className="py-20 bg-industrial-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=60&h=60&fit=crop&crop=center"
              alt="Wildberries"
              className="w-12 h-12 rounded-lg"
            />
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl metallic-text">
              Решения для Wildberries
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Специализированное оборудование для работы с крупнейшим российским
            маркетплейсом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="industrial-card text-center">
              <div className="w-16 h-16 bg-industrial-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={solution.icon as any}
                  size={32}
                  className="text-industrial-accent"
                />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {solution.description}
              </p>
              <div className="space-y-2">
                {solution.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 text-sm"
                  >
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-industrial-accent"
                    />
                    <span className="text-white font-semibold">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-montserrat font-bold text-3xl text-white mb-6">
              Требования Wildberries
            </h3>
            <p className="text-muted-foreground mb-8">
              Наше оборудование полностью соответствует всем требованиям
              маркетплейса и обеспечивает бесперебойную работу вашего склада.
            </p>
            <div className="space-y-4">
              {wbRequirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-industrial-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="industrial-card">
            <h4 className="font-montserrat font-bold text-2xl text-white mb-6 text-center">
              Результаты внедрения
            </h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-industrial-accent/10 rounded-lg">
                <span className="text-muted-foreground">
                  Скорость обработки
                </span>
                <span className="text-2xl font-bold text-industrial-accent">
                  +300%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-industrial-accent/10 rounded-lg">
                <span className="text-muted-foreground">Снижение ошибок</span>
                <span className="text-2xl font-bold text-industrial-accent">
                  -95%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-industrial-accent/10 rounded-lg">
                <span className="text-muted-foreground">
                  Экономия на персонале
                </span>
                <span className="text-2xl font-bold text-industrial-accent">
                  -60%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-industrial-accent/10 rounded-lg">
                <span className="text-muted-foreground">ROI за год</span>
                <span className="text-2xl font-bold text-industrial-accent">
                  280%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="industrial-btn text-lg flex items-center gap-3 mx-auto">
            <Icon name="Calculator" size={24} />
            Рассчитать эффект для вашего склада
          </button>
        </div>
      </div>
    </section>
  );
};

export default WildberriesSolutions;
