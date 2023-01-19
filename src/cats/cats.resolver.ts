import { Query,  Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";

@Resolver()
export class CatsResolver {
  constructor(
    private  catsService: CatsService

  ) {}

  @Query(() => String)
  async hello(){
     return "Hello There"
  }

  @Query(()=> [CreateCatDto])
  async cats() {
    return this.catsService.findAll()
  }
}
   
  

