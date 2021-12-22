import adultImg from "../public/images/adult.png";
import kidImg from '../public/images/kid.png';
import {imageType} from "image-size/dist/types";
import {url} from "inspector";



type patients = {
    title: string,
    imageUrl: string,
    textArray: Array<string>,
};

export const adultPatient: patients = {
    title: 'Взрослый',
    imageUrl: '/images/adult.png',
    textArray: ['Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте. \n',
    'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки. \n',
    'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. '],
}

export const kidPatient: patients = {
    title: 'Ребенок',
    imageUrl: '/images/kid.png',
    textArray: ['Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми\n' +
    'движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с\n' +
    'осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность\n' +
    'в отношении наличия СМА.\n',
       'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение\n' +
       'терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются\n' +
       'дегенерации при прогрессировании заболевания',
    ],
}