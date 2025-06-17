import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    volume: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here would be form submission logic
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-industrial-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 metallic-text">
            Получить консультацию
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Оставьте заявку и получите персональное коммерческое предложение в
            течение 2 часов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="industrial-card">
              <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
                Почему выбирают нас?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "Award", text: "15+ лет опыта в автоматизации" },
                  { icon: "Users", text: "500+ довольных клиентов" },
                  { icon: "Truck", text: "Работаем по всей России" },
                  { icon: "Shield", text: "Гарантия 3 года на оборудование" },
                  { icon: "Wrench", text: "Собственный сервисный центр" },
                  { icon: "TrendingUp", text: "ROI от 280% за первый год" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon
                      name={item.icon as any}
                      size={20}
                      className="text-industrial-accent"
                    />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="industrial-card">
              <h4 className="font-montserrat font-bold text-xl text-white mb-4">
                Контактная информация
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon
                    name="MapPin"
                    size={18}
                    className="text-industrial-accent"
                  />
                  <span className="text-muted-foreground">
                    Москва, ул. Промышленная, 42
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="Clock"
                    size={18}
                    className="text-industrial-accent"
                  />
                  <span className="text-muted-foreground">
                    Пн-Пт: 9:00-18:00, Сб-Вс: по договоренности
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="Phone"
                    size={18}
                    className="text-industrial-accent"
                  />
                  <span className="text-muted-foreground">
                    +7 (495) 123-45-67
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="industrial-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-industrial-gray border border-industrial-light/30 rounded-lg text-white placeholder-muted-foreground focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-industrial-gray border border-industrial-light/30 rounded-lg text-white placeholder-muted-foreground focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                    placeholder="Название компании"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-industrial-gray border border-industrial-light/30 rounded-lg text-white placeholder-muted-foreground focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-industrial-gray border border-industrial-light/30 rounded-lg text-white placeholder-muted-foreground focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                    placeholder="email@company.ru"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Объем упаковки в месяц
                </label>
                <select
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-industrial-gray border border-industrial-light/30 rounded-lg text-white focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                >
                  <option value="">Выберите объем</option>
                  <option value="до 10000">До 10 000 заказов</option>
                  <option value="10000-50000">10 000 - 50 000 заказов</option>
                  <option value="50000-100000">50 000 - 100 000 заказов</option>
                  <option value="более 100000">Более 100 000 заказов</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-industrial-gray border border-industrial-light/30 rounded-lg text-white placeholder-muted-foreground focus:ring-2 focus:ring-industrial-accent focus:border-transparent resize-none"
                  placeholder="Расскажите о ваших задачах и требованиях..."
                />
              </div>

              <button
                type="submit"
                className="w-full industrial-btn text-lg flex items-center justify-center gap-3"
              >
                <Icon name="Send" size={20} />
                Получить коммерческое предложение
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
