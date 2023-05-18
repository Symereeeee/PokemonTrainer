 // script.js
        // Step 3: Create a trainer object using object literals
        const trainer = {
            // Step 4: Initialize/add trainer object properties
            name: "Fritz",
            age: 21,
            pokemon: [], // array for pokemon
            friends: {
                close: ["Misty", "Brock"],
                distant: ["Professor Oak", "Gary"]
            },
            // Step 5: Initialize/add trainer object method
            talk: function() {
                console.log("Magikarp! Use Fly!");
            }
        };

        // Step 6: Access trainer object properties using dot and square bracket notation
        console.log(trainer.name);
        console.log(trainer["age"]);

        // Step 7: Invoke/call the trainer talk object method
        trainer.talk();

        // Step 8: Create a constructor for creating a pokemon
        function Pokemon(name, level) {
            // Step 9: Initialize/add pokemon object properties
            this.name = name;
            this.level = level;
            this.health = 50 + level * 10;
            this.attack = 5 + level * 2;
        }

        // Step 13: Create/instantiate several pokemon objects
        const Rayquaza = new Pokemon("Raquaza", 10);
        const Groudon = new Pokemon("Groudon", 8);
        const Magikarp = new Pokemon("Magikarp", 12);

        // Step 14-17: Implement tackle and faint methods
        Pokemon.prototype.tackle = function(targetPokemon) {
            targetPokemon.health -= this.attack;
            if (targetPokemon.health <= 0) {
                this.faint(targetPokemon);
            }
        };

        Pokemon.prototype.faint = function(targetPokemon) {
            console.log(targetPokemon.name + " has fainted.");
        };

        // Step 17: Invoke the tackle method of one pokemon object
        Rayquaza.tackle(Rayquaza);

        // Step 21: Display the array in the console
        console.log([Rayquaza, Groudon, Magikarp]);