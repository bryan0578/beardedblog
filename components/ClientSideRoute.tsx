import Link from 'next/link';

interface ClientSideRouteProps {
  children: React.ReactNode;
  route: string;
}

const ClientSideRoute: React.FC<ClientSideRouteProps> = ({ children, route }) => {
  return (
    <Link href={route}>
      {children}
    </Link>
  );
};

export default ClientSideRoute;
