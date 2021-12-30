import { styled } from '~/styles/stitches.config';

const StyledPill = styled('strong', {
  borderRadius: 16,
  width: 'fit-content',
  px: 8,
  py: 2,
});

const StyledEngineeringPill = styled(StyledPill, {
  backgroundColor: '$tomato1',
  border: `1px solid $tomato7`,
  color: `$tomato11`,
});

const StyledCookingPill = styled('strong', {
  backgroundColor: `$cyan1`,
  border: `1px solid $cyan7`,
  color: `$cyan11`,
});

const StyledMusicPill = styled('strong', {
  backgroundColor: '$lime1',
  border: `1px solid $lime7`,
  color: '$lime11',
});

export enum Label {
  Engineering = 'engineering',
  Cooking = 'cooking',
  Music = 'music',
}

interface PillLabel {
  pillLabel: Label;
}

export const PillLabel = ({ pillLabel }: PillLabel) => {
  const pills = {
    [Label.Engineering]: (
      <StyledEngineeringPill>engineering</StyledEngineeringPill>
    ),
    [Label.Music]: <StyledMusicPill>music</StyledMusicPill>,
    [Label.Cooking]: <StyledCookingPill>cooking</StyledCookingPill>,
  };
  return <>{pills[pillLabel]}</>;
};
