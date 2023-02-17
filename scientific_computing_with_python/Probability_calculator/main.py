import copy
import random

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
        if balls_to_draw > len(self.contents):
            return self.contents
        else:
            balls = random.sample(self.contents, balls_to_draw)
            for ball in balls:
                self.contents.remove(ball)
            return balls

a = Hat(red = 2, blue = 8)
print(a.draw(10))

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):

