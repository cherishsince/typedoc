/**
 * This is a module doc comment with legacy behavior.
 */
/** dummy comment */
import './comment2';

/**
 * A Comment for a class
 *
 * ## Some Markup
 * **with more markup**
 *
 * An example with decorators that should not parse to tag
 * ```
 * @myDecorator
 * @FactoryDecorator('a', 'b', 'c')
 * export class CommentedClass {
 *   myProp: string = 'myProp';
 *
 *   @PropDecorator() decoratedProp: string;
 *
 *   constructor(@ParamDecorator public param: string) { }
 *
 *   myMethod() { }
 * }
 * ```
 * @deprecated
 * @todo something
 */
export class CommentedClass {
  /**
   * The main prop
   */
  prop: string;

  /**
   * @hidden
   */
  hiddenprop: string;

  /**
   * @ignore
   */
  ignoredprop: string;
}

/** Function description
 *
 *  @param scope Test description.
 *  @returns Test description.
 */
export function gh1164(scope: string) {
    return scope;
}
