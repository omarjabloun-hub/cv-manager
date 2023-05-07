import {Args, Resolver} from "@nestjs/graphql";
import {Cv} from "./entities/cv.entity";
import {CvService} from "./cv.service";
import {Query} from "@nestjs/common";

@Resolver(() => Cv)
export class CvResolver {
    constructor(private readonly cvService: CvService) {
    }

    /*@Query(() => [Cv], { name: 'cv' })
    findAll() {
        return this.cvService.findAll();
    }

    @Query(() => Cv, { name: 'cv' })
    findOne(@Args('cvId') cvId: number) {
        return this.cvService.findOne(cvId);
    }
*/


}