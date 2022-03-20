
package labpad;

import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Console implements Observer {

    Line linia;

    public Console() {
    }

    static class Command {

        int i, pos;

        Command(int i, int pos) {
            this.i = i;
            this.pos = pos;
        }
    }

    @Override
    public void update(Observable ob, Object o) {
        char car;
        Command com = (Command) o;
        switch (com.i) {
            case Case.CARRIAGE_RETURN:
                System.exit(0);
                break;
            case Case.BACKSPACE:
                System.out.print("\u001B\u005b\u0044\u001B\u005b\u0050");
                break;
            case Case.FLETXA_DRETA:
                System.out.print("\u001B\u005b\u0043");
                break;
            case Case.FLETXA_ESQUERRA:
                System.out.print("\u001B\u005b\u0044");
                break;
            case Case.RODA_AMUNT:
                System.out.print("\u001B\u005b\u0043");
                break;
            case Case.RODA_AVALL:
                System.out.print("\u001B\u005b\u0044");
                break;
            case Case.CLIC_DRET:
                    if (com.pos > 0) {
                        System.out.print("\u001B\u005b" + com.pos + "\u0043");
                    } else if (com.pos < 0) {
                        System.out.print("\u001B\u005b" + (com.pos*-1) + "\u0044");
                    }
                break;
            case Case.CLIC_ESQUERRA:
                break;
            case Case.INSERTAR:
                break;
            case Case.INICI:
                System.out.print("\u001B\u005b" + com.pos + "\u0044");
                break;
            case Case.FIN:
                System.out.print("\u001B\u005b" + com.pos + "\u0043");
                break;
            case Case.SUPRIMIR:
                System.out.print("\u001B\u005b\u0050");
                break;
            default:
                if (com.pos == 0) {
                    car = (char) com.i;
                    System.out.print(Character.toString(car));
                    break;
                } else {
                    car = (char) com.i;
                    System.out.print("\u001B\u005b\u0040");
                    System.out.print(Character.toString(car));
                    break;
                }
        }
    }

}