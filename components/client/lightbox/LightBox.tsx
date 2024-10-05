import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Image from 'next/image';

interface LightBoxProps {
  images: {
    src: string;
    alt: string;
  }[];
  isLightboxOpen: boolean;
  setLightboxIsOpen: (lightbox: boolean) => void;
  photoIndex: number;
  setPhotoIndex: (index: number) => void;
}

export const LightBox: React.FC<LightBoxProps> = ({
  setLightboxIsOpen,
  images,
  isLightboxOpen,
  photoIndex,
  setPhotoIndex
}) => {
  return (
    <Dialog open={isLightboxOpen} onOpenChange={setLightboxIsOpen}>
      <DialogContent className="sm:max-w-[800px]" aria-describedby="">
        <DialogHeader>
          <DialogTitle>Image Gallery</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={images[photoIndex].src}
                  width={800}
                  height={450}
                  alt={images[photoIndex].alt}
                  className="h-[450px] rounded-md object-cover"
                />
              </CarouselItem>
              {images.map(
                (image, index) =>
                  index !== photoIndex && (
                    <CarouselItem key={index}>
                      <Image
                        src={image.src}
                        width={800}
                        height={450}
                        alt={image.alt}
                        className="h-[450px] w-full rounded-md object-cover"
                      />
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2">
              <Button variant="ghost" size="icon" aria-label="Previous">
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2">
              <Button variant="ghost" size="icon" aria-label="Next">
                <ChevronRightIcon className="h-6 w-6" />
              </Button>
            </CarouselNext>
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
