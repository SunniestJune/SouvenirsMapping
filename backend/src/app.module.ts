import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PinModule } from "./pin/pin.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [
    PinModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
  ],
  providers: [PrismaService]
})
export class AppModule {}
