import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

interface Slide {
  id: number;
  title: string;
  content: string[];
  image?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Жанровые особенности романа-поэмы Достоевского',
    content: [
      'Роман-поэма представляет собой уникальный синтетический жанр, объединяющий эпическую широту романного повествования с лирической интенсивностью и философской глубиной поэмы.',
      'Творчество Фёдора Михайловича Достоевского знаменует собой вершину развития этого жанра в русской литературе XIX века, где традиционные жанровые границы размываются, создавая принципиально новую художественную форму.',
      'Настоящая работа посвящена исследованию жанровой специфики романов Достоевского и особенностей их структурной организации, что позволяет глубже понять новаторство писателя.'
    ],
    image: 'https://cdn.poehali.dev/projects/440b6d00-68ba-43c8-8566-62d501a14411/files/02b7fbd1-0c31-4f53-b2ce-d24144784c62.jpg'
  },
  {
    id: 2,
    title: 'Фёдор Михайлович Достоевский (1821-1881)',
    content: [
      'Фёдор Михайлович Достоевский — один из величайших русских писателей и мыслителей, чьё творчество оказало огромное влияние на мировую литературу и философию. Родился 30 октября 1821 года в Москве, в семье врача Мариинской больницы для бедных.',
      'Творческий путь Достоевского был сложен и драматичен. После успеха первого романа "Бедные люди" (1846) писатель пережил арест по делу петрашевцев, смертный приговор, замененный каторгой в Сибири (1849-1854), что коренным образом повлияло на его мировоззрение и творчество.',
      'В 1860-1870-е годы были созданы великие романы: "Преступление и наказание" (1866), "Идиот" (1868), "Бесы" (1871-1872), "Подросток" (1875) и "Братья Карамазовы" (1879-1880). Эти произведения поставили вечные вопросы о природе человека, добре и зле, свободе и ответственности.',
      'Достоевский соединил в своём творчестве психологический реализм, философскую глубину и новаторство художественной формы. Его романы стали образцом нового типа повествования, где идеи и характеры существуют в напряжённом диалогическом единстве.'
    ],
    image: 'https://cdn.poehali.dev/projects/440b6d00-68ba-43c8-8566-62d501a14411/files/dc1d6bff-7a9a-4d09-b1b7-6d695f00df7e.jpg'
  },
  {
    id: 3,
    title: 'Введение в жанр романа-поэмы',
    content: [
      'Роман-поэма как жанровое образование возникает на пересечении двух мощных литературных традиций. С одной стороны, это эпическая традиция романа с его способностью охватывать широкий спектр социальных отношений, множественность характеров и судеб. С другой стороны — лирико-философская традиция поэмы с её концентрированностью образов, символической насыщенностью и ритмической организацией повествования.',
      'Термин "роман-поэма" впервые получил теоретическое обоснование в работах литературоведов начала XX века, хотя сами произведения этого типа существовали значительно раньше. Ключевой особенностью жанра является не просто механическое сочетание романных и поэмных элементов, но их органический синтез, создающий качественно новую художественную реальность.',
      'В романе-поэме повествовательная ткань пронизана лирическими отступлениями, философскими размышлениями, символическими образами и мотивами, которые образуют сложную семантическую сеть. При этом сохраняется романная широта охвата действительности, многоплановость сюжета и психологическая глубина характеров.',
      'Жанр романа-поэмы предполагает особую роль автора-повествователя, который выступает не просто как объективный наблюдатель, но как активный участник философского диалога с читателем и своими героями. Авторское сознание становится организующим центром произведения, определяющим его идейно-художественное единство.'
    ]
  },
  {
    id: 4,
    title: 'Историческое развитие жанра',
    content: [
      'Предпосылки формирования романа-поэмы можно обнаружить уже в эпоху романтизма, когда происходило активное взаимопроникновение эпических и лирических форм. Романтическая поэма (Byron, Пушкин, Лермонтов) и философский роман (Jean Paul, Шатобриан) подготовили почву для возникновения синтетического жанра.',
      'В русской литературе важнейшим этапом на пути к роману-поэме стало творчество Николая Васильевича Гоголя, особенно его поэма "Мёртвые души", которую автор сам определил как поэму, несмотря на её прозаическую форму и романную структуру. Гоголь соединил сатирическое изображение социальной действительности с лирическими отступлениями и пророческими интонациями.',
      'Достоевский наследует гоголевскую традицию, но существенно трансформирует её, создавая свой вариант романа-поэмы. Если у Гоголя доминирует сатирико-лирическое начало, то у Достоевского на первый план выходит философско-психологическая проблематика, связанная с метафизическими вопросами человеческого бытия.',
      'Важную роль в развитии жанра сыграла и европейская традиция философского романа (Вольтер, Дидро, Бальзак), а также достижения социально-психологического романа (Стендаль, Диккенс). Достоевский синтезировал эти традиции с русской литературной почвой, создав уникальную жанровую модель.'
    ],
    image: 'https://cdn.poehali.dev/projects/440b6d00-68ba-43c8-8566-62d501a14411/files/73aebbf7-868d-4cbd-b076-5810390cc4a2.jpg'
  },
  {
    id: 5,
    title: 'Жанровые особенности: Полифоничность',
    content: [
      'Полифоничность как основополагающий принцип. Михаил Бахтин в своём классическом исследовании "Проблемы поэтики Достоевского" (1929, переработанное издание 1963) определил романы писателя как полифонические, где голоса героев звучат наравне с голосом автора, создавая диалогическое единство равноправных сознаний.',
      'Эта полифония придаёт произведениям особую музыкальную организованность, характерную для поэмного жанра. В отличие от монологического романа, где все голоса подчинены авторской позиции, у Достоевского каждый персонаж является носителем самостоятельного сознания и полноправным участником идейного диалога.',
      'Полифонический роман строится не как единая авторская концепция мира, а как множество равноправных сознаний с их мирами, которые, сочетаясь, но не сливаясь, образуют единство высшего порядка. Герои не только объекты авторского слова, но и субъекты собственного слова, обладающего такой же значимостью, как слово автора.',
      'Полифоническая структура позволяет Достоевскому избежать окончательных выводов и готовых истин. Истина рождается в процессе диалога, в столкновении различных точек зрения, каждая из которых имеет право на существование. Это создаёт особую художественную напряжённость и философскую глубину произведений.'
    ],
    image: 'https://cdn.poehali.dev/projects/440b6d00-68ba-43c8-8566-62d501a14411/files/6a41bc8a-9e79-4e23-84f2-5d95ddfcf709.jpg'
  },
  {
    id: 6,
    title: 'Жанровые особенности: Идеологизм и символизм',
    content: [
      'Идеологический роман. Герои Достоевского — носители определённых идей и мировоззрений. Их столкновения представляют собой не просто бытовые конфликты, но философские диспуты о смысле существования, природе добра и зла, свободе и необходимости, Боге и бессмертии души. Эта идеологическая насыщенность сближает романы Достоевского с философской поэмой.',
      'Раскольников, Мышкин, Ставрогин, Иван Карамазов — все они прежде всего носители идей, которые они проверяют своей судьбой. Идея для героев Достоевского не абстрактная теория, а живая сила, определяющая их поступки и судьбу. Столкновение идей становится драматическим действием, определяющим развитие сюжета.',
      'Символизм и мифологизация. Произведения Достоевского насыщены символическими образами и мотивами, которые образуют сквозные лейтмотивы. Петербург предстаёт не просто как географическое место, но как символ трагического разрыва человека с природой и Богом, как город призрачный и фантастический.',
      'Мотивы болезни, сна, двойничества создают особую поэтическую атмосферу. Сон у Достоевского — не просто физиологическое состояние, но символическое пространство, где раскрываются тайные глубины души. Двойничество отражает раздвоенность сознания современного человека, утратившего целостность бытия.'
    ],
    image: 'https://cdn.poehali.dev/projects/440b6d00-68ba-43c8-8566-62d501a14411/files/338a8d39-791f-4c82-84eb-881838fd62cc.jpg'
  },
  {
    id: 7,
    title: 'Жанровые особенности: Карнавализация и психологизм',
    content: [
      'Карнавализация. Бахтин отметил карнавальный характер романов Достоевского, где происходит смешение высокого и низкого, трагического и комического, священного и профанного. Эта карнавальность восходит к средневековой традиции и придаёт повествованию особую динамику и многоголосие.',
      'В карнавальной атмосфере отменяются социальные иерархии, стираются границы между различными сферами жизни. Преступник философствует о высших истинах, князь оказывается "идиотом", проститутка читает Евангелие. Эта карнавальная свобода позволяет Достоевскому исследовать человека в самых неожиданных и парадоксальных ситуациях.',
      'Психологизм и исповедальность. Внутренний мир героев раскрывается через внутренние монологи, исповеди, дневниковые записи. Достоевский исследует самые тёмные и противоречивые глубины человеческой души, не боясь заглянуть в бездны подсознания.',
      'Это создаёт эффект лирической интимности, характерной для поэзии, при сохранении романной объективности изображения. Исповедь у Достоевского — не просто рассказ о себе, но акт самопознания и самосуда, где человек предстаёт перед высшей правдой. Психологический анализ сочетается с метафизическими прозрениями.'
    ]
  },
  {
    id: 8,
    title: 'Структура: Хронотоп и композиция',
    content: [
      'Хронотоп. Время и пространство в романах Достоевского организованы особым образом. События сжаты в короткие временные промежутки (несколько дней или недель), но при этом достигается эффект огромной психологической протяжённости. Действие "Преступления и наказания" занимает около двух недель основного действия, но вмещает колоссальную духовную эволюцию героя.',
      'Пространство концентрируется вокруг нескольких ключевых точек (комната, трактир, улица, лестница), которые становятся местами экзистенциальных прозрений. Комната Раскольникова — это не просто жилище, но символическое пространство духовного удушья и нравственных терзаний. Пороги, лестницы, перекрёстки — места встреч и выборов.',
      'Сюжетно-композиционная организация. Романы Достоевского строятся по принципу кризисного развития действия. Герои постоянно находятся в пороговых ситуациях, требующих немедленного выбора между добром и злом, верой и неверием, жизнью и смертью. Это создаёт напряжённый драматизм повествования.',
      'Композиция часто включает в себя "роман в романе" — вставные новеллы, притчи, легенды (например, "Легенда о Великом инквизиторе" в "Братьях Карамазовых", сон Раскольникова о лошади). Эти вставные эпизоды не являются отступлениями, но органически входят в идейную структуру произведения, раскрывая его философский смысл.'
    ]
  },
  {
    id: 9,
    title: 'Структура: Система персонажей и диалог',
    content: [
      'Система персонажей. Герои Достоевского образуют сложную систему двойников, антиподов и соответствий. Центральный герой окружён персонажами, которые представляют различные варианты решения его главной проблемы. Раскольников и Свидригайлов, Раскольников и Порфирий Петрович, Раскольников и Соня — каждая пара представляет различные грани одной проблемы.',
      'Эта система создаёт эффект зеркальных отражений, характерный для поэтической композиции. Двойники показывают герою его возможные судьбы, варианты развития его идеи. Свидригайлов — это Раскольников, доведший свою теорию до логического конца. Соня — путь спасения через смирение и любовь.',
      'Диалогическая структура. Диалог у Достоевского — не просто форма речевого общения, но способ философского познания истины. Диалоги строятся по принципу столкновения противоположных позиций, где каждая получает полноценное выражение. При этом истина не даётся в готовом виде, а рождается в процессе диалогического напряжения.',
      'Повествовательная организация. Достоевский использует различные типы повествования: от всеведущего рассказчика до субъективных форм (дневник, записки, исповедь). "Записки из подполья" целиком построены как исповедь-монолог. "Братья Карамазовы" ведутся от лица условного хроникёра. Эта смена повествовательных инстанций создаёт эффект многоголосия.'
    ]
  },
  {
    id: 10,
    title: 'Влияние на мировую литературу и философию',
    content: [
      'Достоевский оказал определяющее влияние на развитие русской и мировой литературы. Его открытия в области романной формы стали основой для модернистской прозы XX века. Полифоническая структура романов предвосхитила эксперименты Джеймса Джойса, Марселя Пруста, Уильяма Фолкнера, создававших многоголосные повествования.',
      'Психологический метод Достоевского, основанный на исследовании пограничных состояний человеческой психики, повлиял на становление психоанализа. Зигмунд Фрейд называл Достоевского величайшим психологом в литературе и посвятил ему специальную работу "Достоевский и отцеубийство" (1928).',
      'Экзистенциальная проблематика романов предвосхитила философию экзистенциализма. Альбер Камю, Жан-Поль Сартр, Лев Шестов, Николай Бердяев находили у Достоевского глубочайшее исследование экзистенциальных проблем свободы, выбора, абсурда существования. Ницше называл Достоевского единственным психологом, у которого он мог чему-то научиться.',
      'Влияние Достоевского распространяется и на кинематограф. Его принципы построения характеров, напряжённая драматургия, философская проблематика оказали воздействие на творчество таких режиссёров, как Акира Куросава ("Идиот"), Роберт Брессон ("Кроткая"), Андрей Тарковский, Андрей Кончаловский.'
    ],
    image: 'https://cdn.poehali.dev/projects/440b6d00-68ba-43c8-8566-62d501a14411/files/0fd20871-4ced-4418-abf3-1797c406d0a6.jpg'
  },
  {
    id: 11,
    title: 'Заключение',
    content: [
      'Роман-поэма Достоевского представляет собой уникальное явление в истории мировой литературы. Синтезируя эпическую широту романа с лирической интенсивностью и философской глубиной поэмы, писатель создал художественную форму, адекватную сложности и противоречивости современного ему сознания.',
      'Жанровые особенности романов Достоевского — полифоничность, идеологизм, символизм, карнавализация, психологизм — не являются механическим набором приёмов, но образуют органическое единство, направленное на решение главной художественной задачи: изображение человека в его отношении к последним вопросам бытия.',
      'Структурная организация произведений, основанная на принципах диалогизма, кризисного развития действия, системе двойников и сложной повествовательной организации, создаёт эффект многомерности художественного мира, где каждый элемент связан с целым и несёт смысловую нагрузку.',
      'Влияние Достоевского на развитие литературы XX-XXI веков трудно переоценить. Его открытия в области романной формы, психологического анализа, философской проблематики стали достоянием мировой культуры и продолжают определять развитие современной литературы.',
      'Изучение жанровой природы и структурных особенностей романов Достоевского остаётся актуальной задачей литературоведения, позволяющей глубже понять не только творчество великого писателя, но и общие закономерности развития художественной формы. Роман-поэма Достоевского — это вечно живое наследие, обращённое к будущему.'
    ]
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [viewedSlides, setViewedSlides] = useState<Set<number>>(new Set([0]));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setViewedSlides(prev => new Set([...prev, index]));
    setReadingProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, isFullscreen]);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      } else {
        setIsAutoPlay(false);
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlide, nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const completionPercentage = ((viewedSlides.size / slides.length) * 100).toFixed(0);
  const estimatedReadingTime = slides[currentSlide].content.join(' ').split(' ').length / 200;

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background flex flex-col relative overflow-hidden">
      <Progress value={(currentSlide / (slides.length - 1)) * 100} className="fixed top-0 left-0 right-0 z-50 h-1" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(215,180,100,0.03),transparent_50%)]" />
      
      <header className="border-b border-border/50 backdrop-blur-sm bg-card/80 py-6 px-6 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/30">
              <Icon name="BookOpen" size={24} className="text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">
              Жанровые особенности романа-поэмы Достоевского
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="gap-2"
              title="Автовоспроизведение (10 сек/слайд)"
            >
              <Icon name={isAutoPlay ? "Pause" : "Play"} size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              title="Полноэкранный режим (F или F11)"
            >
              <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotes(!showNotes)}
              title="Показать заметки"
            >
              <Icon name="StickyNote" size={16} />
            </Button>
            <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-primary font-medium text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
            <div className="px-3 py-2 rounded-full bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
              {completionPercentage}% просмотрено
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-6xl">
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-2xl rounded-2xl overflow-hidden animate-fade-in">
            <div className="p-14">
              {slide.image && (
                <div className="mb-10 rounded-xl overflow-hidden border-4 border-accent/20 shadow-xl animate-slide-in">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
                <h2 className="text-5xl font-bold mb-10 text-primary border-b-4 border-accent/30 pb-6 tracking-tight leading-tight">
                  {slide.title}
                </h2>
              </div>
              
              <div className="space-y-7 text-lg leading-[1.85] text-foreground/90">
                {slide.content.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-justify first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1 hover:text-foreground transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground border-t border-border/30 pt-6">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>~{Math.ceil(estimatedReadingTime)} мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="FileText" size={16} />
                  <span>{slide.content.join(' ').split(' ').length} слов</span>
                </div>
                {viewedSlides.has(currentSlide) && (
                  <div className="flex items-center gap-2 text-accent">
                    <Icon name="CheckCircle2" size={16} />
                    <span>Просмотрено</span>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {showNotes && (
            <Card className="mt-6 bg-amber-50/80 backdrop-blur-sm border-2 border-amber-200/50 shadow-lg rounded-xl p-6 animate-fade-in">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" size={20} className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Заметки для преподавателя</h3>
                  <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
                    <li>Подчеркните важность концепции полифонии Бахтина</li>
                    <li>Обратите внимание на связь с европейской традицией</li>
                    <li>Используйте примеры из конкретных произведений</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}

          <div className="mt-10 flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2 h-12 px-6 border-2 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 disabled:opacity-30"
            >
              <Icon name="ChevronLeft" size={22} />
              <span className="font-medium">Предыдущий</span>
            </Button>

            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 relative group ${
                    index === currentSlide 
                      ? 'bg-accent w-12 shadow-lg' 
                      : viewedSlides.has(index)
                      ? 'bg-accent/60 w-3 hover:bg-accent/80 hover:w-6'
                      : 'bg-muted w-3 hover:bg-accent/50 hover:w-6'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Слайд {index + 1}
                  </span>
                </button>
              ))}
            </div>

            <Button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              size="lg"
              className="gap-2 h-12 px-6 border-2 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 disabled:opacity-30"
            >
              <span className="font-medium">Следующий</span>
              <Icon name="ChevronRight" size={22} />
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-4 animate-fade-in flex-wrap" style={{ animationDelay: '0.4s' }}>
            <div className="px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground flex items-center gap-2 hover:border-accent/50 transition-colors">
              <Icon name="Calendar" size={16} />
              <span>2024</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground flex items-center gap-2 hover:border-accent/50 transition-colors">
              <Icon name="GraduationCap" size={16} />
              <span>Литературоведение</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground flex items-center gap-2 hover:border-accent/50 transition-colors">
              <Icon name="FileText" size={16} />
              <span>Академическая презентация</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground flex items-center gap-2 hover:border-accent/50 transition-colors">
              <Icon name="Keyboard" size={16} />
              <span>← → Навигация</span>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Info" size={14} />
              Используйте клавиши ← → или пробел для навигации • F для полноэкранного режима
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 backdrop-blur-sm bg-card/80 py-5 px-6 text-center relative z-10">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Icon name="BookMarked" size={16} className="text-accent" />
          Исследование творчества Ф.М. Достоевского
        </p>
      </footer>
    </div>
  );
}