import { ReactNode } from 'react';
import { BackgroundWavesView } from '../bg/BackgroundWavesView';


type MainProps = {
  children: ReactNode
  className?: string
}
// className={`font-sans text-white text-sm`}
const Main = (props: MainProps) => (
  <div>
    <BackgroundWavesView className={props.className}>
      {props.children}
    </BackgroundWavesView>
  </div>
);

export { Main };
