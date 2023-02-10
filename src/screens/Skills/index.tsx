import * as S from './styles';

import { Card } from '../../components/Card';

export function Skills() {
  return (
    <S.Container>


    <S.SubContainer>

        <S.Skills>

            <Card
            title='Html5'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
            />
             <Card
            title='Css3'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
            />
            <Card
            title='JavaScript'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            />
            <Card
            title='TypeScript'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
            />
             <Card
            title='React'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />

             <Card
            title='React Native'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <Card
            title='Styled Components'
            img="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
            />
            <Card
            title='Firebase'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            />
            <Card
            title='GitHub'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            />
            <Card
            title='Figma'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <Card
            title='Android'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            />
            <Card
            title='Wordpress'
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
            />
        </S.Skills>

    </S.SubContainer>

</S.Container>
  );
}