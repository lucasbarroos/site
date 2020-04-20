import React from 'react';
import {
  Bar,
  BarContent,
  BarText,
} from './styles';

export default function ProgressBar({ progress }) {
  return (
    <Bar>
      <BarContent progress={progress}>
        <BarText>
          {progress}
          %
        </BarText>
      </BarContent>
    </Bar>
  );
}
