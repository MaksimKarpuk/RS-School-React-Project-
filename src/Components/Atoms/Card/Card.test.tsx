import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Card from './Card';

describe('card', () => {
  it('card 1 render', () => {
    render(<Card title="Home" subtitle="24-02-22" src="image1" />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/24-02-22/i)).toBeInTheDocument();
    expect(screen.getByAltText(/home/i));
  });
  it('card 2 render', () => {
    render(<Card title="Nature" subtitle="02-03-19" src="image1" />);
    expect(screen.getByText(/Nature/i)).toBeInTheDocument();
    expect(screen.getByText(/02-03-19/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Nature/i));
  });
  it('card 3 render', () => {
    render(<Card title="Bike" subtitle="22-02-23" src="image1" />);
    expect(screen.getByText(/Bike/i)).toBeInTheDocument();
    expect(screen.getByText(/22-02-23/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Bike/i));
  });
  it('card 4  render', () => {
    render(<Card title="Road" subtitle="01-06-20" src="image1" />);
    expect(screen.getByText(/Road/i)).toBeInTheDocument();
    expect(screen.getByText(/01-06-20/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Road/i));
  });
  it('card 5 render', () => {
    render(<Card title="Tokyo" subtitle="05-07-21" src="image1" />);
    expect(screen.getByText(/Tokyo/i)).toBeInTheDocument();
    expect(screen.getByText(/05-07-21/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Tokyo/i));
  });
  it('card 6 render', () => {
    render(<Card title="Dog" subtitle="05-09-18" src="image1" />);
    expect(screen.getByText(/Dog/i)).toBeInTheDocument();
    expect(screen.getByText(/05-09-18/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Dog/i));
  });
});
