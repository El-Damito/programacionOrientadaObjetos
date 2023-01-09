from car import Car
if __name__ == "__main__":
    print("Hola mundo")
    car = Car()
    car.license = "AMS243"
    car.driver = "Andres Guerra"
    print(vars(car))

    car2 = Car()
    car2.license = "Creasteunaclase"
    car2.driver = "Matha"
    print(vars(car2))
