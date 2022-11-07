/// <reference types="sat" />
import RBush from "rbush";
import { BaseSystem } from "./base-system";
import { Body, RaycastResult, Response, Vector } from "./model";
/**
 * collision system
 */
export declare class System extends BaseSystem {
    response: Response;
    /**
     * remove body aabb from collision tree
     */
    remove(body: Body, equals?: (a: Body, b: Body) => boolean): RBush<Body>;
    /**
     * re-insert body into collision tree and update its aabb
     */
    insert(body: Body): RBush<Body>;
    /**
     * alias for insert, updates body in collision tree
     */
    updateBody(body: Body): void;
    /**
     * update all bodies aabb
     */
    update(): void;
    /**
     * separate (move away) colliders
     */
    separate(): void;
    /**
     * check one collider collisions with callback
     */
    checkOne(body: Body, callback: (response: Response) => void | boolean): void;
    /**
     * check all colliders collisions with callback
     */
    checkAll(callback: (response: Response) => void | boolean): void;
    /**
     * get object potential colliders
     */
    getPotentials(body: Body): Body[];
    /**
     * check do 2 objects collide
     */
    checkCollision(body: Body, wall: Body): boolean;
    /**
     * raycast to get collider of ray from start to end
     */
    raycast(start: Vector, end: Vector, allowCollider?: (testCollider: Body) => boolean): RaycastResult;
    private collided;
}
//# sourceMappingURL=system.d.ts.map