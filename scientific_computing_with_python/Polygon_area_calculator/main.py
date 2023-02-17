class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def set_width(self, width):
        self.width = width
    
    def set_height(self, height):
        self.height = height

    def get_area(self):
        return self.width * self.height
    
    def get_perimeter(self):
        return 2  * self.width + 2 * self.height
    
    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** .5

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        else:
            asterisk = "*"
            picture = ""
            picture += f"{asterisk * self.width}\n"
            for rows in range(1, self.height - 1):
                picture += f"{asterisk}{asterisk * (self.width - 2)}{asterisk}\n"
            if self.height > 1:
                picture += f"{asterisk * self.width}\n"
            return picture


    def get_amount_inside(self, rectangle):
        rows = self.height // rectangle.height
        cols = self.width // rectangle.width
        return rows * cols

class Square(Rectangle):
    def __init__(self, length):
        self.width = length
        self.height = length

    def __str__(self):
        return f"Square(side={self.width})"

    def set_side(self, side):
        self.width = side
        self.height = side

    def set_width(self, width):
        self.width = width
        self.height = width
    
    def set_height(self, height):
        self.height = height
        self.width = height
