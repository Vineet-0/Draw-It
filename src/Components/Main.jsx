import React, { useState } from 'react';

import { BiRectangle, BiSolidRectangle } from 'react-icons/bi';
import { BiCircle, BiSolidCircle } from 'react-icons/bi';
import { RiTriangleLine, RiTriangleFill } from 'react-icons/ri';
import { PiPaintBrushFill } from 'react-icons/pi';
import { BiSolidEraser } from 'react-icons/bi';

function Main() {
    const [active, setActive] = useState('');
    const [fillColorChecked, setFillColorChecked] = useState(false);

    const handleActive = (shape) => {
        setActive(shape);
    };

    const handleCheckboxChange = () => {
        setFillColorChecked(!fillColorChecked);
    };

    return (
        <div className="flex flex-row w-screen h-screen border-x-[60px] border-y-[80px] bg-[#4A98F7] border-[#4A98F7] gap-[20px]">
            {/* Draw Tools */}
            <div className="w-[400px] p-8 h-full bg-white rounded-lg">
                <div>
                    <label className="title text-lg font-bold">Shapes</label>
                    <ul>
                        <li
                            className={active === 'rectangle' ? 'text-blue-500' : ''}
                            id="rectangle"
                            onClick={() => handleActive('rectangle')}
                        >
                            <div className="flex flex-row items-center gap-2">
                                {fillColorChecked ? <BiSolidRectangle /> : <BiRectangle />}
                                <span>Rectangle</span>
                            </div>
                        </li>
                        <li
                            className={active === 'circle' ? 'text-blue-500' : ''}
                            id="circle"
                            onClick={() => handleActive('circle')}
                        >
                            <div className="flex flex-row items-center gap-2">
                                {fillColorChecked ? <BiSolidCircle /> : <BiCircle />}
                                <span>Circle</span>
                            </div>
                        </li>
                        <li
                            className={active === 'triangle' ? 'text-blue-500' : ''}
                            id="triangle"
                            onClick={() => handleActive('triangle')}
                        >
                            <div className="flex flex-row items-center gap-2">
                                {fillColorChecked ? <RiTriangleFill /> : <RiTriangleLine />}
                                <span>Triangle</span>
                            </div>
                        </li>
                        <li
                            className={active === 'fill' ? 'text-blue-500' : '' }
                            id="fill"
                            onClick={() => handleActive('fill')}
                            checked={fillColorChecked}
                            onChange={handleCheckboxChange}
                        >
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="fill-color"
                                    checked={fillColorChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <span>Fill Color</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <label className="title text-lg font-bold">Options</label>
                    <ul className="options">
                        <li className="option tool" id="rectangle">
                            <div className="flex flex-row items-center gap-2">
                                <PiPaintBrushFill />
                                <span>Brush</span>
                            </div>
                        </li>
                        <li className="option tool" id="circle">
                            <div className="flex flex-row items-center gap-2">
                                <BiSolidEraser />
                                <span>Eraser</span>
                            </div>
                        </li>
                        <li className="option">
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="range"
                                    id="size-slider"
                                    min="1"
                                    max="30"
                                    value="5"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <label class="title">Colors</label>
                    <ul class="options">
                        <li class="option"></li>
                        <li class="option selected"></li>
                        <li class="option"></li>
                        <li class="option"></li>
                        <li class="option">
                            <input
                                type="color"
                                id="color-picker"
                                value="#4A98F7"
                            />
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-2">
                    <button
                        className="text-[#6C757D] hover:text-white hover:bg-[#6C757D]
                                    py-2 text-lg rounded-md border-[1px] border-[#6C757D]
                                    transition-all duration-300 ease-in-out"
                    >
                        Clear Canvas
                    </button>
                    <button
                        className="text-white bg-[#4A98F7]
                                    py-2 text-lg rounded-md border-[1px] border-[#4A98F7]
                                    transition-all duration-300 ease-in-out"
                    >
                        Save As Image
                    </button>
                </div>
            </div>

            {/* Draw Page */}
            <div className="w-full bg-white rounded-lg">
                <div className="m-[10px] p-[20px] bg-white">
                    Hello
                </div>
            </div>
        </div>
    );
}

export default Main;
