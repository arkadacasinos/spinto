'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-sidebar border-t border-sidebar-border">
      <div className="px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-sidebar-foreground mb-4">Spinto Casino</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Надежная платформа для онлайн-игр с лучшими слотами и live казино.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@spinto.com</span>
              </div>
            </div>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Игры</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Слоты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live казино</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Карточные игры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Рулетка</a></li>
            </ul>
          </div>

          {/* Promotions */}
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Акции</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Приветственный бонус</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Еженедельные турниры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Программа лояльности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VIP привилегии</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sidebar-foreground mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ответственная игра</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Spinto Casino. Все права защищены.</p>
            <p>Лицензия: Malta Gaming Authority</p>
            <p>18+ | Играйте ответственно</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
