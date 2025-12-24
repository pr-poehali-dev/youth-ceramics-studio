import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const masterClasses = [
    {
      title: 'Введение в керамику',
      description: 'Познакомьтесь с основами работы с глиной, научитесь основным техникам лепки и создайте свое первое изделие',
      duration: '2 часа',
      level: 'Для начинающих',
      icon: 'Sparkles'
    },
    {
      title: 'Гончарный круг',
      description: 'Освойте искусство работы на гончарном круге и создайте вазу или чашу своими руками',
      duration: '3 часа',
      level: 'Средний уровень',
      icon: 'CircleDot'
    },
    {
      title: 'Авторская тарелка',
      description: 'Создайте уникальную декоративную тарелку с авторским дизайном и росписью',
      duration: '2.5 часа',
      level: 'Все уровни',
      icon: 'Palette'
    }
  ];

  const masters = [
    {
      name: 'Анна Соколова',
      specialty: 'Гончарное дело',
      experience: '12 лет опыта',
      description: 'Специализируется на функциональной керамике и авторских формах'
    },
    {
      name: 'Дмитрий Волков',
      specialty: 'Скульптурная керамика',
      experience: '8 лет опыта',
      description: 'Создает уникальные скульптурные композиции и арт-объекты'
    },
    {
      name: 'Мария Петрова',
      specialty: 'Роспись и глазури',
      experience: '10 лет опыта',
      description: 'Эксперт по цветным глазурям и авторским техникам декорирования'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/745d35d9-0bed-426b-9e9a-4e86daa3007e/files/54078a86-98f5-498f-b7e4-34adcbc2315f.jpg',
    'https://cdn.poehali.dev/projects/745d35d9-0bed-426b-9e9a-4e86daa3007e/files/3b10525b-790a-4995-88c9-49eeddb176b8.jpg',
    'https://cdn.poehali.dev/projects/745d35d9-0bed-426b-9e9a-4e86daa3007e/files/06865b35-cbb4-4b72-8445-cdd0f991852c.jpg'
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Ваzа</h1>
          <div className="hidden md:flex gap-6">
            {['home', 'classes', 'gallery', 'about', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'classes' && 'Мастер-классы'}
                {section === 'gallery' && 'Галерея'}
                {section === 'about' && 'О студии'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Создавайте <span className="text-primary">искусство</span> своими руками
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Окунитесь в мир керамики. Наши увлекательные мастер-классы помогут вам раскрыть творческий потенциал и создать уникальные изделия.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('classes')} className="group">
                  Записаться на занятие
                  <Icon name="ArrowRight" className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('gallery')}>
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
              <img
                src={galleryImages[0]}
                alt="Керамическая студия"
                className="rounded-3xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Мастер-классы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите формат занятия, который вам по душе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masterClasses.map((course, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={course.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Award" size={16} className="text-primary" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Галерея работ</h2>
            <p className="text-lg text-muted-foreground">
              Вдохновляющие работы наших учеников и мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={img}
                  alt={`Керамическое изделие ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Работа студии</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши мастера</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Опытные керамисты, которые помогут вам освоить искусство работы с глиной
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card 
                key={index} 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{master.name}</CardTitle>
                  <CardDescription className="text-white/70 text-center">
                    {master.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-accent font-semibold mb-2">{master.experience}</p>
                  <p className="text-white/80">{master.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Запишитесь на мастер-класс или задайте вопрос
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Как вас зовут?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" type="tel" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите, что вас интересует..." rows={4} />
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-semibold">Адрес</p>
                  <p className="text-sm text-muted-foreground">ул. Творческая, 15</p>
                </div>
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-semibold">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
                <div>
                  <Icon name="Clock" className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-semibold">Режим работы</p>
                  <p className="text-sm text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 overflow-hidden border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Map" size={24} className="text-primary" />
                Как нас найти
              </CardTitle>
              <CardDescription>
                Мы находимся в самом центре творческого района
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[400px] bg-muted relative">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.617644,55.755826&z=16&l=map&pt=37.617644,55.755826,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="border-0"
                  title="Карта расположения студии"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white/80">© 2024 Студия Ваzа. Создаем искусство вместе</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;