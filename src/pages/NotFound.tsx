import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-7xl md:text-9xl font-extrabold text-gradient-primary">404</h1>
          <p className="text-xl text-muted-foreground">Упс! Страница не найдена</p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Возможно, страница была перемещена или удалена. Вернитесь на главную, чтобы продолжить.
          </p>
          <Button onClick={() => navigate("/")} className="bg-primary hover:bg-primary/90">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
