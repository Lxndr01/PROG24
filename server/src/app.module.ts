import { KitchenModule } from './Routes/Kitchen/kitchen.module';
import { KitchenService } from './Routes/Kitchen/kitchen.service';
import { KitchenController } from './Routes/Kitchen/kitchen.controller';
import { FoodService } from './Routes/Food/food.service';
import { FoodController } from './Routes/Food/food.controller';
import { FoodModule } from './Routes/Food/food.module';
import { AllergenModule } from './Routes/Allergen/allergen.module';
import { FoodsaverModule } from './Routes/Foodsaver/foodsaver.module';
import { CharityModule } from './Routes/Charity/charity.module';
import { FoodOffererModule } from './Routes/Foodofferer/foodofferer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './PrismaConfig/PrismaService';
import { AuthModule } from './Routes/Auth/auth.module';

@Module({
      imports: [
        KitchenModule, 
        FoodModule, 
        FoodModule, 
            AllergenModule,
            CharityModule,
            FoodOffererModule,
            FoodsaverModule,
            AuthModule,
            FoodModule],
      controllers: [
            AppController],
      providers: [
           AppService,
             PrismaService],

})
export class AppModule { }
