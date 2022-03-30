import whenExit from "when-exit";
/**
 * copyright 2022 MIT
 * Mhammed Talhaouy
 *
 */
class Cursor {
  private stream: NodeJS.WriteStream;
  private visible: boolean;
  /**
   *
   * @param stream
   */
  constructor(stream: NodeJS.WriteStream = process.stdout) {
    this.stream = stream;
    this.visible = true;

    whenExit(this.show);
  }

  has(): boolean {
    return this.visible;
  }

  hide(): void {
    return this.toggle(false);
  }

  show(): void {
    return this.toggle(true);
  }

  toggle(force = !this.visible): void {
    if (!this.stream.isTTY) return;

    this.visible = force;

    const command = force ? "\u001B[?25h" : "\u001B[?25l";

    this.stream.write(command);
  }
}

export default Cursor;
