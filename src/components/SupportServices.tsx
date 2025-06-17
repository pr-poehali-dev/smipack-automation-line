import Icon from "@/components/ui/icon";

const SupportServices = () => {
  const services = [
    {
      title: "Консультация и подбор",
      description: "Анализ потребностей и подбор оптимального решения",
      icon: "MessageSquare",
      duration: "1-2 дня",
      included: [
        "Выезд инженера",
        "Анализ процессов",
        "Расчет ROI",
        "Техническое задание",
      ],
    },
    {
      title: "Установка и настройка",
      description: "Профессиональный монтаж и настройка оборудования",
      icon: "Settings",
      duration: "3-5 дней",
      included: [
        "Доставка и монтаж",
        "Настройка ПО",
        "Интеграция с WMS",
        "Обучение персонала",
      ],
    },
    {
      title: "Техническая поддержка",
      description: "Круглосуточная поддержка и обслуживание",
      icon: "Headphones",
      duration: "24/7",
      included: [
        "Удаленная диагностика",
        "Выезд инженера",
        "Запасные части",
        "Обновления ПО",
      ],
    },
  ];

  const supportStats = [
    { label: "Время отклика", value: "< 15 мин", icon: "Clock" },
    { label: "Доступность", value: "99.9%", icon: "Shield" },
    { label: "Инженеров", value: "50+", icon: "Users" },
    { label: "Регионов РФ", value: "85", icon: "MapPin" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-industrial-gray to-industrial-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 metallic-text">
            Поддержка и сервис
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный цикл сопровождения от консультации до круглосуточной
            технической поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="industrial-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-industrial-accent/20 rounded-lg flex items-center justify-center">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-industrial-accent"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-white">
                    {service.title}
                  </h3>
                  <p className="text-industrial-accent font-semibold">
                    {service.duration}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white">
                  В стоимость включено:
                </h4>
                {service.included.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-industrial-accent"
                    />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="industrial-card mb-16">
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-3xl text-white mb-4">
              Наша служба поддержки
            </h3>
            <p className="text-muted-foreground">
              Команда профессионалов обеспечивает бесперебойную работу вашего
              оборудования
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-industrial-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className="text-industrial-accent"
                  />
                </div>
                <div className="text-3xl font-bold text-industrial-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="industrial-card">
            <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
              Планы обслуживания
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-industrial-light/20 rounded-lg">
                <div>
                  <div className="font-semibold text-white">Базовый</div>
                  <div className="text-sm text-muted-foreground">
                    Гарантийное обслуживание
                  </div>
                </div>
                <div className="text-industrial-accent font-bold">Включен</div>
              </div>
              <div className="flex justify-between items-center p-4 border border-industrial-accent rounded-lg bg-industrial-accent/10">
                <div>
                  <div className="font-semibold text-white">Расширенный</div>
                  <div className="text-sm text-muted-foreground">
                    24/7 поддержка + запчасти
                  </div>
                </div>
                <div className="text-industrial-accent font-bold">
                  от 50 000 ₽/мес
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border border-industrial-light/20 rounded-lg">
                <div>
                  <div className="font-semibold text-white">Премиум</div>
                  <div className="text-sm text-muted-foreground">
                    Персональный инженер
                  </div>
                </div>
                <div className="text-industrial-accent font-bold">
                  от 120 000 ₽/мес
                </div>
              </div>
            </div>
          </div>

          <div className="industrial-card">
            <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
              Контакты поддержки
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon
                  name="Phone"
                  size={20}
                  className="text-industrial-accent"
                />
                <div>
                  <div className="text-white font-semibold">
                    +7 (495) 123-45-67
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Горячая линия 24/7
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="Mail"
                  size={20}
                  className="text-industrial-accent"
                />
                <div>
                  <div className="text-white font-semibold">
                    support@smipack.ru
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Техническая поддержка
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-industrial-accent"
                />
                <div>
                  <div className="text-white font-semibold">
                    Telegram: @smipack_support
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Быстрая связь
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
