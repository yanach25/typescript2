import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sum(): number {
      return this._items.reduce((previousValue: number, currentValue: Buyable) => {
        return previousValue + currentValue.price;
      }, 0);
    }

    sumWithDiscount(discount: number): number {
      if (discount < 0 || discount > 100) {
        throw new Error('Discount should be between 0 and 100');
      }

      return this.sum() * (100 - discount) / 100;
    }

    remove(id: number): void {
      const index: number = this._items.findIndex((item: Buyable) => item.id === id);

      if (index >= 0) {
        this._items.splice(index, 1);
      } else {
        throw Error(`Wrong id ${id}`);
      }
    }
}
