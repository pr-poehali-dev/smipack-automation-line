import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 h-full w-full p-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="border border-industrial-light/20 rounded"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 metallic-text">
            SMIPACK
          </h1>
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl mb-8 text-industrial-white">
            Автоматические линии упаковки для Wildberries
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Увеличьте производительность упаковки на{" "}
            <span className="text-industrial-accent font-bold">300%</span>и
            сократите время обработки заказов для маркетплейсов
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <button className="industrial-btn flex items-center gap-3 text-lg">
              <Icon name="Package" size={24} />
              Рассчитать стоимость
            </button>
            <button className="border-2 border-industrial-accent text-industrial-accent hover:bg-industrial-accent hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg">
              <Icon name="Play" size={24} />
              Смотреть демо
            </button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="industrial-card text-center">
              <div className="text-4xl font-bold text-industrial-accent mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Упаковок/час</div>
            </div>
            <div className="industrial-card text-center">
              <div className="text-4xl font-bold text-industrial-accent mb-2">
                99.8%
              </div>
              <div className="text-muted-foreground">Точность упаковки</div>
            </div>
            <div className="industrial-card text-center">
              <div className="text-4xl font-bold text-industrial-accent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Техподдержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
