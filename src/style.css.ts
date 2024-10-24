import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const slide = style({
  backgroundColor: '#F8F8F8',
  padding: '1.5rem 1rem',
  borderRadius: '1rem',
  transition: 'all .25s ease',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

globalStyle('.swiper-slide', {
  height: 'auto',
});

const imgBox = style({
  width: '48px',
  height: '48px',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F8F8F8',
  borderRadius: '1rem',
});

const plane = style({
  transform: 'rotate(312deg)',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});
const btn = style({
  borderRadius: '24px',
  padding: '1rem',
});

const btnArrow = style({
  width: '48px',
  height: '48px',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '1rem',
});

const boxCard = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  backgroundColor: '#F8F8F8',
  borderRadius: '1rem',
  padding: '1rem',
  marginTop: '.25rem',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  slide,
  imgBox,
  plane,
  btn,
  btnContainer,
  btnArrow,
  boxCard,
};
