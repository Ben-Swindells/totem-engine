interface GridProps {
  size: {
    x: number;
    y: number;
  };
  color: string;
}

export const Grid: React.FC<GridProps> = ({ size, color }) => {
  return <gridHelper args={[size.x, size.y, color]} />;
};
