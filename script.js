gsap.registerPlugin(ScrollTrigger);

//Criando uma timeline

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: false,
    }
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left:'0%',
    },
    'orange'
)
tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        left:'23%',
    },
    'orange'
)
tl.to(
    '#laranja',
    {
        top: '160%',
        right:'10%',
        width: '10%',
    },
    'orange'
)
tl.to(
    '#folha',
    {
        top: '110%',
        left:'70%',
        rotate: '1030deg',
    },
    'orange'
)
tl.to(
    '#folha2',
    {
        top: '110%',
        left:'0%',
        rotate: '1030deg',
    },
    'orange'
)

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: false,
    }
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);
tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);
tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);
tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);
tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);
tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);
