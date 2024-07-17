import emotion1 from './../assets/emotion1.png'; //memory에 캐싱돼서 불러옴 (최적화)
import emotion2 from './../assets/emotion2.png'; //src='/public.emotion1.png'는 계속해서 불러오기 때문에 최적화x
import emotion3 from './../assets/emotion3.png';
import emotion4 from './../assets/emotion4.png';
import emotion5 from './../assets/emotion5.png';

function getEmotionImage (emotionId) {
    switch(emotionId) {
        case 1 : return emotion1;
        case 2 : return emotion2;
        case 3 : return emotion3;
        case 4 : return emotion4;
        case 5 : return emotion5;
    }
}

export default getEmotionImage;