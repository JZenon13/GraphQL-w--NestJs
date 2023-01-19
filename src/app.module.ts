import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CatsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: 'schema.gql',
    driver: ApolloDriver,
    debug: false,
    playground: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
