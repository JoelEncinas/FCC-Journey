import random
import copy


class Hat:
    def __init__(self, **kwargs):
        if len(kwargs) == 0:
            # don't create
            raise ValueError("The hat needs to have at least one ball")
        else:
            contents = []
            for balls in kwargs:
                ballQ = [balls] * kwargs[balls]
                contents.extend(ballQ)

            self.contents = contents

    def draw(self, balls_to_draw):
        drawn_balls = []
        if balls_to_draw > len(self.contents):
            return self.contents.copy()

        for _ in range(balls_to_draw):
            ball = self.contents.pop(random.randrange(len(self.contents)))
            drawn_balls.append(ball)
        return drawn_balls


a = Hat(red=2, blue=8)


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    success_count = 0

    for _ in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        balls_drawn = hat_copy.draw(num_balls_drawn)

        success = True

        for key, value in expected_balls.items():
            if balls_drawn.count(key) < value:
                success = False
                
        if success:
            success_count += 1

    return success_count / num_experiments


print(experiment(a, {"red": 1}, 10, 50000))
